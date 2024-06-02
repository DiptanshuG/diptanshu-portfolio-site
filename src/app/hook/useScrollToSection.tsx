import { useRef } from "react";

interface UseScrollToSection {
  sectionRef: React.RefObject<HTMLDivElement>;
  scrollToSection: () => void;
}

const useScrollToSection = (): UseScrollToSection => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    console.log("sectionRef.current:", sectionRef.current); // Log the current value

    if (sectionRef.current) {
      alert("Scrolling to section");
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("sectionRef.current is null");
    }
  };

  return { sectionRef, scrollToSection };
};

export default useScrollToSection;
