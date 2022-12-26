import { createContext, useState } from "react";
import { useLocation } from "react-router";

// Context api used for navigation instead of a react router dom so that state can be persisted even when navigating other "pages". This makes the app a single page application.

const NavContext = createContext("");

export default NavContext;

export const NavigationProvider = ({ children }) => {
  const location = useLocation().pathname.slice(1);
  const colorConfig = {
      '': {
      nav: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      font: "white",
      logo: "white",
    },
    'Home': {
      nav: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      font: "lightgray",
      logo: "white",
    },
    'About': { nav: "linear-gradient(to right, #ece9e6, #ffffff)", font: "#203354", logo: "#00468b" },
    'darkweb': { nav: "linear-gradient(to right, #000000, #434343)", font: "white", logo: "white" }
  };
  const [navColor, setNavColor] = useState(colorConfig[location].nav);
  const [fontColor, setFontColor] = useState(colorConfig[location].font);
  const [logoColor, setLogoColor] = useState(colorConfig[location].logo);

  const contextData = {
    navColor,
    setNavColor,
    fontColor,
    setFontColor,
    logoColor,
    setLogoColor,
    location,
    colorConfig,
  };

  return (
    <NavContext.Provider value={contextData}>{children}</NavContext.Provider>
  );
};
