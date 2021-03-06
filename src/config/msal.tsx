import React from "react";
import { AuthenticationParameters } from "msal";
import { msalApp, requiresInteraction, GRAPH_REQUESTS, fetchMsGraph, GRAPH_ENDPOINTS } from "./msal/auth-utils";
import AxiosInstance from "services/utils/AxiosInstance";

let graphProfile = null;

const acquireToken = async (request: AuthenticationParameters, redirect = true) => {
  return msalApp.acquireTokenSilent(request).catch(async (error: any) => {
    // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
    // due to consent or interaction required ONLY
    if (requiresInteraction(error.errorCode)) {
      return redirect ? msalApp.acquireTokenRedirect(request) : msalApp.acquireTokenPopup(request);
    } else {
      console.error("Non-interactive error:", error.errorCode);
    }
  });
};

export const onSignIn = async (redirect = true) => {
  if (redirect) {
    return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN);
  }

  const loginResponse = await msalApp.loginPopup(GRAPH_REQUESTS.LOGIN).catch((error) => {
    console.log(error);
  });

  if (!loginResponse) {
    return;
  }

  await acquireToken(GRAPH_REQUESTS.LOGIN).catch((error) => {
    console.log(error);
  });
};

export const onSignOut = () => {
  msalApp.logout();
};

export const getUserProfileByID = async (id: string) => {
  const token = await acquireToken(GRAPH_REQUESTS.LOGIN);

  if (!token) return undefined;
  return await fetchMsGraph(GRAPH_ENDPOINTS.USER + `/${id}@idf.il`, token.accessToken).catch(() => {
    console.error("Failed");
  });
};

export const runApp = async (app: JSX.Element): Promise<JSX.Element> => {
  msalApp.handleRedirectCallback((authCallback) => {
    console.log(authCallback);
  });

  if (!msalApp.getAccount()) {
    await onSignIn();
  }

  const tokenResponse = await acquireToken(GRAPH_REQUESTS.LOGIN);

  if (!tokenResponse) return <div></div>;

  AxiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + tokenResponse.idToken.rawIdToken;
    return config;
  });

  AxiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      let originalRequest = error.config;
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        sessionStorage.clear();
        await msalApp
          .acquireTokenSilent(GRAPH_REQUESTS.LOGIN)
          .then(() => {
            originalRequest.headers.Authorization = "Bearer " + tokenResponse.idToken.rawIdToken;
            return AxiosInstance(originalRequest);
          })
          .catch((error: any) => {
            console.log(error);
            msalApp.acquireTokenRedirect(GRAPH_REQUESTS.LOGIN);
          });
      }
      // Do something with response error
      return Promise.reject(error);
    }
  );

  graphProfile = await fetchMsGraph(GRAPH_ENDPOINTS.ME, tokenResponse.accessToken).catch(() => {
    console.error("Unable to fetch Graph profile.");
  });

  if (graphProfile) {
    return app;
  }

  return <div></div>;
};
