import React from "react";
import ContactCard from "./ContactCard";
import Canvas from "@/components/canvas";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-surface flex items-center justify-center py-20">
      <div className="absolute inset-0 opacity-30">
        <Canvas />
      </div>
      <div className="relative z-10 w-full max-w-md px-4 mx-auto">
        <ContactCard />
      </div>
    </section>
  );
};

export default Contact;
