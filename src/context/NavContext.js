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
      logo: "#79f7d9",
    },
    'Home': {
      nav: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      font: "white",
      logo: "#79f7d9",
    },
    'About': { nav: "linear-gradient(to right, #ece9e6, #ffffff)", font: "#203354", logo: "#00468b" },
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
