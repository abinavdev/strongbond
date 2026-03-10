import { useEffect, useRef } from "react";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function isCoarsePointer() {
  return window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
}

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion() || isCoarsePointer()) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let glowX = mouseX;
    let glowY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      // Exponential smoothing (smaller = smoother/laggier)
      dotX += (mouseX - dotX) * 0.22;
      dotY += (mouseY - dotY) * 0.22;
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* soft glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 opacity-70"
        style={{
          width: 220,
          height: 220,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, hsla(35, 80%, 50%, 0.22) 0%, hsla(35, 80%, 50%, 0.10) 30%, transparent 68%)",
          filter: "blur(2px)",
        }}
      />

      {/* crisp dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: "hsl(var(--accent))",
          boxShadow: "0 0 0 6px hsla(35, 80%, 50%, 0.10)",
        }}
      />
    </>
  );
}

