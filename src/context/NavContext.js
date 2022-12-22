import { createContext, useState } from "react";

// Context api used for navigation instead of a react router dom so that state can be persisted even when navigating other "pages". This makes the app a single page application.

const NavContext = createContext("");

export default NavContext;

export const NavigationProvider = ({ children }) => {
  const [navColor, setNavColor] = useState("linear-gradient(to right, #0f2027, #203a43, #2c5364)");

  const contextData = { navColor, setNavColor };

  return (
    <NavContext.Provider value={contextData}>{children}</NavContext.Provider>
  );
};
