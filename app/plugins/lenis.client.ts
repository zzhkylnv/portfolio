import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothWheel: true
  })

  // Hook requestAnimationFrame for Lenis scroll updates
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return {
    provide: {
      lenis
    }
  }
})
