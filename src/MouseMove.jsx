import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const Mouse = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 }); // Reset position when the mouse leaves
  };

  const handleMouseMove = (event) => {
    if (isHovered) {
      const elementRect = containerRef.current.getBoundingClientRect();
      const offsetX = (event.clientX - elementRect.left) / 15;
      const offsetY = (event.clientY - elementRect.top) / 15;
      setPosition({ x: offsetX, y: offsetY });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHovered(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      <div
        className={`box ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Mouse;
