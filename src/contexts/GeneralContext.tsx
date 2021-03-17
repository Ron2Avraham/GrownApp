import React from "react";

const selectedCalendarDayType: number = 0;
const eventsCalendarRefType: any = null;

export default React.createContext({
  selectedCalendarDay: selectedCalendarDayType,
  eventsCalendarRef: eventsCalendarRefType,
  setEventsCalendarRefState: (el: HTMLDivElement | null) => {},
});
