"use client";

import React, { createContext, useContext, useRef } from "react";

interface ScrollContextType {
  sectionRef: React.RefObject<HTMLDivElement>;
  scrollToSection: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ sectionRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    // During static generation, return a no-op function
    if (typeof window === "undefined") {
      return {
        sectionRef: { current: null },
        scrollToSection: () => {},
      };
    }
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

