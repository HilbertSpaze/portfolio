import React, { useEffect } from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/mainpage/Home";
import About from "./pages/mainpage/About";
import ResponsiveAppBar from "./components/layout/Appbar";
import { NavigationProvider } from "./context/NavContext";
import { HashRouter as Router } from 'react-router-dom'
import Darkweb from "./pages/subpage/Project/darkweb/darkweb";
import ScrollToTop from "./utils/scrollToTop";

import ReactGA from "react-ga4";

ReactGA.initialize('G-LWKK0LP7JK');
export default function App() {

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page:window.location.pathname + window.location.search});
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavigationProvider>
          <ResponsiveAppBar />
        </NavigationProvider>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/darkweb" element={<Darkweb/>} />
        </Routes>
      </Router>
    </>
  );
}
