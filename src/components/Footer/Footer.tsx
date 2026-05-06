import React, { useEffect, useRef } from "react";

const Footer = () => {
  return (
    <footer className="bg-surface text-theme py-8 border-t border-theme">
      <div className="section-shell flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-theme-muted">© {new Date().getFullYear()} Diptanshu Bhawsar.</p>
        <p className="text-sm text-theme-muted">
          Crafted with Next.js, TypeScript, and polished UI design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
