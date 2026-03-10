export const easeOutSmooth = [0.22, 1, 0.36, 1] as const;

type TransitionOpts = {
  duration?: number;
  delay?: number;
};

export function revealTransition(opts: TransitionOpts = {}) {
  return {
    duration: 0.85,
    ease: easeOutSmooth,
    ...opts,
  };
}

