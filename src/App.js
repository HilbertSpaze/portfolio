import React from "react";
import { Route, Routes, } from "react-router-dom";
import Home from "./pages/mainpage/Home";
import About from "./pages/mainpage/About";
import ResponsiveAppBar from "./components/layout/Appbar";
import { NavigationProvider } from "./context/NavContext";


export default function App() {
  return (
    <>
        <NavigationProvider>
          <ResponsiveAppBar />
        </NavigationProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </>
  );
}
