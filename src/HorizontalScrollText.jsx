import React, { useEffect, useRef } from 'react';

const MovingText = ({ direction, pixelsToMove, children }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = textRef.current;
      const scrollOffset = window.scrollY;
      let transformStyle = '';

      if (direction === 'up') {
        transformStyle = `translateY(-${scrollOffset * pixelsToMove}px)`;
      } else if (direction === 'down') {
        transformStyle = `translateY(${scrollOffset * pixelsToMove}px)`;
      } else if (direction === 'left') {
        transformStyle = `translateX(-${scrollOffset * pixelsToMove}px)`;
      } else if (direction === 'right') {
        transformStyle = `translateX(${scrollOffset * pixelsToMove}px)`;
      }

      textElement.style.transform = transformStyle;
    };

    const handleResize = () => {
      handleScroll(); // Update the text position on resize as well
    };

    handleScroll(); // Initial position update

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, pixelsToMove]);

  return (
    <div ref={textRef} style={{ position: 'relative' }}>
      {children}
    </div>
  );
};

export default MovingText;
