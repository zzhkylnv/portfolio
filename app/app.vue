<script setup lang="ts">
import { ref } from 'vue'
const showSplash = ref(true)
</script>

<template>
  <SplashScreen v-if="showSplash" @finished="showSplash = false" />
  <NuxtPage />
</template>