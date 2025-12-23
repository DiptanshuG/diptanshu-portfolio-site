import { useRef } from "react";

interface UseScrollToSection {
  sectionRef: React.RefObject<HTMLDivElement>;
  scrollToSection: () => void;
}

const useScrollToSection = (): UseScrollToSection => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return { sectionRef, scrollToSection };
};

export default useScrollToSection;
