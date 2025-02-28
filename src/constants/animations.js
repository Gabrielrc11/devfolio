export const FADE_IN_ANIMATION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const SLIDE_IN_LEFT = {
  ...FADE_IN_ANIMATION,
  initial: { ...FADE_IN_ANIMATION.initial, x: -50 },
  animate: { ...FADE_IN_ANIMATION.animate, x: 0 }
};

export const SLIDE_IN_RIGHT = {
  ...FADE_IN_ANIMATION,
  initial: { ...FADE_IN_ANIMATION.initial, x: 50 },
  animate: { ...FADE_IN_ANIMATION.animate, x: 0 }
}; 