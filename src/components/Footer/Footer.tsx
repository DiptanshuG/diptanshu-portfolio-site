import React, { useEffect, useRef } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#02030a] text-white py-8 border-t border-white/10">
      <div className="section-shell flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Diptanshu Bhawsar.</p>
        <p className="text-sm text-white/60">
          Crafted with Next.js, TypeScript, and polished UI design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
