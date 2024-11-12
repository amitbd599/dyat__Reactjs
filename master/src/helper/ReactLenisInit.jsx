import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
const ReactLenisInit = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

    // Attach Lenis to ref for future reference
    lenisRef.current = lenis;

    // Animation frame loop
    function onRaf(time) {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    }
    requestAnimationFrame(onRaf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return <div></div>;
};

export default ReactLenisInit;
