import React, { useState, useEffect } from 'react';
import './style.css'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
    >
      <div className="cursor-inner"></div>
    </div>
  );
};

export default Cursor;
