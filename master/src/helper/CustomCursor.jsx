// CustomCursor.js
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  // Mouse positions
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  useEffect(() => {
    // Function to animate the cursor and follower
    const animateCursor = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      if (followerRef.current) {
        followerRef.current.style.left = `${posX - 12}px`;
        followerRef.current.style.top = `${posY - 12}px`;
      }

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    // Start the animation
    animateCursor();

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='cursor' ref={cursorRef}></div>
      <div className='cursor-follower' ref={followerRef}></div>
    </>
  );
};

export default CustomCursor;
