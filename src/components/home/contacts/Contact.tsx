import React from "react";
import ContactCard from "./ContactCard";
import Canvas from "@/components/canvas";

const Contact: React.FC = () => {
  return (
    <div className="h-screen bg-[rgb(9,4,22)] items-center flex items=center justify-center">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ContactCard />
      </div>{" "}
      <Canvas />
    </div>
  );
};

export default Contact;
