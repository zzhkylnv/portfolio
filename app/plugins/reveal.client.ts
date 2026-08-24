export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      // Add initial setup class
      el.classList.add('reveal-item')

      // Set animation direction based on modifiers
      if (binding.modifiers.left) {
        el.classList.add('reveal-left')
      } else if (binding.modifiers.right) {
        el.classList.add('reveal-right')
      } else if (binding.modifiers.scale) {
        el.classList.add('reveal-scale')
      } else if (binding.modifiers.fade) {
        el.classList.add('reveal-fade-only')
      } else {
        el.classList.add('reveal-up') // default is slide up
      }

      // Set custom transition delay if provided (e.g. v-reveal="200" or v-reveal="'0.3s'")
      if (binding.value !== undefined) {
        if (typeof binding.value === 'number') {
          el.style.transitionDelay = `${binding.value}ms`
        } else if (typeof binding.value === 'string') {
          el.style.transitionDelay = binding.value
        }
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal-active')
              observer.unobserve(el) // Trigger once
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -60px 0px' // Trigger slightly before the element fully enters viewport
        }
      )

      observer.observe(el)
    }
  })
})
