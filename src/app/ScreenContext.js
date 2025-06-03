"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define Tailwind breakpoints (must match Tailwind config)
const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState("md");

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      if (width < breakpoints.sm) setScreenSize("xs");
      else if (width < breakpoints.md) setScreenSize("sm");
      else if (width < breakpoints.lg) setScreenSize("md");
      else if (width < breakpoints.xl) setScreenSize("lg");
      else setScreenSize("xl");
    };

    checkSize(); // Initial check
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Custom hook
export const useScreenSize = () => useContext(ScreenSizeContext);
