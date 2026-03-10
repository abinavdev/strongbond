import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function isTouchLike() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || (navigator.maxTouchPoints ?? 0) > 0)
  );
}

export function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion || isTouchLike()) return;
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        translateX: sx,
        translateY: sy,
      }}
    >
      {/* Outer ring */}
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div
          className="h-10 w-10 rounded-full border border-accent/35 bg-accent/5 backdrop-blur-[2px]"
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
        />
        {/* Inner dot */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </motion.div>
  );
}

