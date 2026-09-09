'use client'
import React, { useState, useEffect } from 'react';

export default function FollowCursorImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <img
        src="/bee.svg"
        alt="Following cursor"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: 50,
          pointerEvents: 'none',
          transform: 'translate(25%, 25%)',
          zIndex: 9999,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />
  );
}