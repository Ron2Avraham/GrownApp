import React, { useEffect, useState } from "react";
import GeneralContext from "./GeneralContext";

const GlobalState = (props: any) => {
  const selectedCalendarDay = 0;
  const [selectedCalendarDayState, setSelectedCalendarDayState] = useState(selectedCalendarDay);
  const [eventsCalendarRefState, setEventsCalendarRefState] = useState<HTMLDivElement | null>(null);

  return (
    <GeneralContext.Provider
      value={{
        selectedCalendarDay: selectedCalendarDayState,
        eventsCalendarRef: eventsCalendarRefState,
        setEventsCalendarRefState: (el: HTMLDivElement | null) => {
          if(el)
            setEventsCalendarRefState(el);
        }
      }}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GlobalState;
