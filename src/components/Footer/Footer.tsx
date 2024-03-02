import React, { useEffect, useRef } from "react";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef?.current!;
    const ctx = canvas?.getContext("2d")!;

    // Ensure canvas and context exist
    if (!canvas || !ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = 200;

    // Create fire animation
    const fire = {
      x: canvas.width / 2,
      y: canvas.height, // Start the fire at the bottom of the canvas
      radius: 20, // Increase the radius of the fire
      speed: 2,
    };

    function drawFire() {
      // Change the fire color to yellow
      const gradient = ctx.createRadialGradient(
        fire.x,
        fire.y,
        0,
        fire.x,
        fire.y,
        fire.radius
      );
      gradient.addColorStop(0, "yellow");
      gradient.addColorStop(1, "orange");
      ctx.beginPath();
      ctx.arc(fire.x, fire.y, fire.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Function to update the animation
    let animationFrameId: number;
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update fire position
      fire.y -= fire.speed;

      // Draw fire
      drawFire();

      // Loop animation
      animationFrameId = requestAnimationFrame(update);
    }

    // Start animation
    update();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-4 relative">
      {/* <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" /> */}
      <p className="text-center" id="trademark">
        ©2024 Diptanshu bhawsar 
      </p>
    </footer>
  );
};

export default Footer;
