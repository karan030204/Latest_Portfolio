import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './TextHover.css';

const TextHover = ({ text, imageSrc }) => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    const image = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(image, { autoAlpha: 1 });
    };

    const handleMouseLeave = () => {
      gsap.to(image, { autoAlpha: 0 });
    };

    const handleMouseMove = (e) => {
      const { left, top, width, height } = item.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      gsap.set(image, { x, y });
    };

    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <li className="item" ref={itemRef} >
      <span  className="item-title" data-menu-item-text={text}>{text}</span>
      <img src={imageSrc}  ref={imageRef} alt="" />
    </li>
  );
};

export default TextHover;
