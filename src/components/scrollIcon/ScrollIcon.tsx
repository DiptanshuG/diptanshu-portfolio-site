import { useState } from "react";
import { CgScrollV } from "react-icons/cg";

const ScrollIcon = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const handleIconClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(true), 1000);
  };

  return (
    <div
      onClick={handleIconClick}
      className={`cursor-pointer border-2 border-white rounded-[30px] py-2 px-1 ${
        isAnimating ? "animate-bounce" : ""
      }`}
    >
      <CgScrollV className="h-6 w-6" size={30} />
    </div>
  );
};

export default ScrollIcon;
