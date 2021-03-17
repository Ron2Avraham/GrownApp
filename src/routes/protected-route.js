import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// const xor = (a, b) => (a && !b) || (!a && b);
/**
 * @param publicRoute Back to home if user logged in and public or no user and not public
 */
const ProtectedRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={(props) => (false ? React.createElement(component, props) : <Redirect to="/" />)} />;
};

export default ProtectedRoute;
