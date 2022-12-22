import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResponsiveAppBar from "./components/layout/Appbar";
import { NavigationProvider } from "./context/NavContext";
export default function App() {
  return (
    <>
      <Router>
        <NavigationProvider>
          <ResponsiveAppBar />
        </NavigationProvider>

        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/Home" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
