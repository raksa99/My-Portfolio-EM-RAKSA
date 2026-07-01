import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMouse) setHasMouse(true);
    },
    [cursorX, cursorY, hasMouse],
  );

  useEffect(() => {
    // Detect if the device actually has a fine pointer (mouse)
    const mql = window.matchMedia('(pointer: fine)');
    setHasMouse(mql.matches);

    const handlePointerChange = (e: MediaQueryListEvent) =>
      setHasMouse(e.matches);
    mql.addEventListener('change', handlePointerChange);

    window.addEventListener('mousemove', moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      setIsHovered(!!interactive);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mql.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [moveCursor]);

  // Don't render on touch-only devices
  if (!hasMouse) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderRadius: '50%',
          border: '1.5px solid',
          borderColor: 'rgba(139, 92, 246, 0.7)',
          backgroundColor: isHovered
            ? 'rgba(139, 92, 246, 0.12)'
            : 'transparent',
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease',
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'rgb(139, 92, 246)',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
