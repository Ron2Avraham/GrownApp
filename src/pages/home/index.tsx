import React from "react";
import useStyles from "./styles";
import About from "components/layout/about/about";
import EventsCalendar from "components/layout/eventsCalendar/eventsCalendar";
import Footer from "components/layout/footer/footer";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <About />
      <EventsCalendar />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
