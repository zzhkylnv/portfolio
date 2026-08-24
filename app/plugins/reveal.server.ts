export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    // Server-side stub for v-reveal to prevent SSR compilation errors
    getSSRProps() {
      return {}
    }
  })
})
