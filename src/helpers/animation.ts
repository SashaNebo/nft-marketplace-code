export const anSlideInDown = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      type: 'tween',
    },
  },

  initial: {
    y: -300,
    opacity: 0,
  },
}

export const anFadeIn = {
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },

  initial: {
    opacity: 0,
  },
}

export const anFadeInEls = {
  animate: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.25,
      duration: 1,
      ease: 'easeInOut',
    },
  }),

  initial: {
    opacity: 0,
  },
}

export const anPulse = {
  animate: {
    background: 'var(--gradient-warm)',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)',
    scale: [1, 1.25, 1, 1.25, 1],
    transition: {
      duration: 2,
      ease: 'linear',
      times: [0, 0.25, 0.5, 0.75, 0.95, 1],
      repeat: 3,
      repeatDelay: 0.25,
      type: 'tween',
    },
  },

  initial: {
    background: 'linear-gradient(101deg, #c951c5 13.57%, #af4d42 97.65%)',
    scale: 1,
    boxShadow: '0 0 5px 5px rgba(0,0,0,0.2)',
  },
}