import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'; 
import { TweenMax } from 'gsap'; 


interface LiquidDistortionEffectProps {}

const LiquidDistortionEffect: React.FC<LiquidDistortionEffectProps> = () => {
  const distortionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = distortionRef.current!;
    const intensity = 0.2;
    const image1 = 'https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60';
    const image2 = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60';
    const speedIn = 2;
    const speedOut = 5;
    const angle1 = Math.PI / 6;
    const angle2 = -Math.PI / 6 * 3;
    const displacementImage = 'https://i.postimg.cc/QNTRDRks/4.png';

    // Initialize the WebGL effect
    new (window as any).hoverEffect({
      parent,
      intensity,
      image1,
      image2,
      speedIn,
      speedOut,
      angle1,
      angle2,
      displacementImage,
    });

    // Cleanup
    return () => {
      // Perform any cleanup if needed
    };
  }, []);

  return (
    <div className="landing">
      <div className="distortion" ref={distortionRef}></div>
    </div>
  );
};

export default LiquidDistortionEffect;
