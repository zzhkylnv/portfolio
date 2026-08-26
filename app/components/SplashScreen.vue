<template>
  <Transition name="splash-fade">
    <div v-if="visible" class="splash" @click="skip">
      <div class="stars"></div>
      <div class="grid-overlay"></div>

      <!-- Tesseract wireframe -->
      <div class="tesseract-wrap">
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
          <div class="cube-inner">
            <div class="face face-inner front"></div>
            <div class="face face-inner back"></div>
            <div class="face face-inner right"></div>
            <div class="face face-inner left"></div>
            <div class="face face-inner top"></div>
            <div class="face face-inner bottom"></div>
          </div>
        </div>
      </div>

      <Transition name="msg-fade" mode="out-in">
        <div class="status-text" :key="statusMessage">{{ statusMessage }}</div>
      </Transition>

      <div class="skip-hint">klik untuk lewati</div>
      <div class="flash" :class="{ go: isFlashing }"></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  redirectTo: { type: String, default: null },       
  duration: { type: Number, default: 4200 },          
  messageInterval: { type: Number, default: 600 },    
})

const emit = defineEmits(['complete'])
const router = useRouter()

const visible = ref(true)
const isFlashing = ref(false)
const finished = ref(false)

const messages = [
  'a Genius',
  'Billionaire',
  'Playgirl',
  'Philanthropist',
]
const messageIndex = ref(0)
const statusMessage = computed(() => messages[messageIndex.value])

let timeoutId = null
let messageTimer = null

function complete() {
  if (finished.value) return
  finished.value = true
  isFlashing.value = true
  clearInterval(messageTimer)

  setTimeout(() => {
    visible.value = false
    emit('complete')
    if (props.redirectTo) router.push(props.redirectTo)
  }, 400)
}

function skip() {
  clearTimeout(timeoutId)
  complete()
}

onMounted(() => {
  document.body.style.overflow = 'hidden'

  messageTimer = setInterval(() => {
    if (messageIndex.value < messages.length - 1) {
      messageIndex.value += 1
    } else {
      clearInterval(messageTimer)
    }
  }, props.messageInterval)

  timeoutId = setTimeout(complete, props.duration)
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
  clearInterval(messageTimer)
  document.body.style.overflow = ''
})

watch(visible, (val) => {
  if (!val) document.body.style.overflow = ''
})
</script>

<style scoped>
.splash-fade-enter-active,
.splash-fade-leave-active {
  transition: opacity 0.9s cubic-bezier(0.6, 0, 0.4, 1);
}
.splash-fade-enter-from,
.splash-fade-leave-to {
  opacity: 0;
}

.msg-fade-enter-active,
.msg-fade-leave-active {
  transition: opacity 0.28s ease, transform 0.28s ease;
}
.msg-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.msg-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.splash {
  --void: #030711;
  --deep-blue: #071224;
  --core-blue: #0e2a4d;
  --electric: #29b6ff;
  --electric-2: #7fe3ff;
  --steel: #3b6ea5;
  --gold: #d9b25c;
  --ghost: #a9c7e8;
  --white: #eaf4ff;

  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: radial-gradient(circle at 50% 45%, var(--core-blue) 0%, var(--deep-blue) 45%, var(--void) 100%);
  overflow: hidden;
  cursor: pointer;
}

.stars {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(1.5px 1.5px at 20% 30%, rgba(255, 255, 255, 0.5) 50%, transparent 51%),
    radial-gradient(1.5px 1.5px at 70% 65%, rgba(255, 255, 255, 0.35) 50%, transparent 51%),
    radial-gradient(1px 1px at 40% 80%, rgba(255, 255, 255, 0.4) 50%, transparent 51%),
    radial-gradient(1.5px 1.5px at 85% 20%, rgba(255, 255, 255, 0.3) 50%, transparent 51%),
    radial-gradient(1px 1px at 10% 60%, rgba(255, 255, 255, 0.3) 50%, transparent 51%),
    radial-gradient(1.5px 1.5px at 55% 15%, rgba(255, 255, 255, 0.4) 50%, transparent 51%);
  background-repeat: repeat;
  background-size: 260px 260px;
  opacity: 0.6;
  animation: drift 40s linear infinite;
}
@keyframes drift {
  from { background-position: 0 0; }
  to { background-position: -260px 260px; }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(41, 182, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(41, 182, 255, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at 50% 45%, black 0%, transparent 70%);
}

.tesseract-wrap {
  position: absolute;
  width: 480px;
  height: 480px;
  perspective: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  z-index: 1;
}
.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 14s linear infinite;
}
.cube-inner {
  position: absolute;
  inset: 22%;
  transform-style: preserve-3d;
  animation: spin-rev 9s linear infinite;
}
@keyframes spin {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}
@keyframes spin-rev {
  from { transform: rotateX(360deg) rotateY(0deg); }
  to { transform: rotateX(0deg) rotateY(360deg); }
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(127, 227, 255, 0.4);
  animation: edge-glow 3s ease-in-out infinite;
}
.face.front { transform: translateZ(240px); }
.face.back { transform: translateZ(-240px) rotateY(180deg); }
.face.right { transform: rotateY(90deg) translateZ(240px); }
.face.left { transform: rotateY(-90deg) translateZ(240px); }
.face.top { transform: rotateX(90deg) translateZ(240px); }
.face.bottom { transform: rotateX(-90deg) translateZ(240px); }

.face-inner {
  border-color: rgba(217, 178, 92, 0.35);
  animation-delay: 0.9s;
}
.face-inner.front { transform: translateZ(105px); }
.face-inner.back { transform: translateZ(-105px) rotateY(180deg); }
.face-inner.right { transform: rotateY(90deg) translateZ(105px); }
.face-inner.left { transform: rotateY(-90deg) translateZ(105px); }
.face-inner.top { transform: rotateX(90deg) translateZ(105px); }
.face-inner.bottom { transform: rotateX(-90deg) translateZ(105px); }

@keyframes edge-glow {
  0%, 100% { opacity: 0.4; box-shadow: none; }
  50% { opacity: 1; box-shadow: 0 0 16px 1px rgba(41, 182, 255, 0.5) inset, 0 0 14px 1px rgba(41, 182, 255, 0.35); }
}

.status-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-style: italic;
  font-size: clamp(0.95rem, 1.6vw, 1.3rem);
  letter-spacing: 0.08em;
  color: var(--electric-2);
  text-shadow: 0 0 16px rgba(41, 182, 255, 0.6);
}

.skip-hint {
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: rgba(169, 199, 232, 0.4);
  z-index: 2;
}

.flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.9) 0%, rgba(41, 182, 255, 0.4) 30%, transparent 65%);
  opacity: 0;
  pointer-events: none;
  z-index: 3;
}
.flash.go { animation: flashpop 0.7s ease-out forwards; }
@keyframes flashpop {
  0% { opacity: 0; transform: scale(0.4); }
  40% { opacity: 1; transform: scale(1.3); }
  100% { opacity: 0; transform: scale(2.4); }
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

@media (max-width: 480px) {
  .tesseract-wrap { width: 320px; height: 320px; }
  .face.front, .face-inner.front { transform: translateZ(160px); }
  .face.back, .face-inner.back { transform: translateZ(-160px) rotateY(180deg); }
  .face.right, .face-inner.right { transform: rotateY(90deg) translateZ(160px); }
  .face.left, .face-inner.left { transform: rotateY(-90deg) translateZ(160px); }
  .face.top, .face-inner.top { transform: rotateX(90deg) translateZ(160px); }
  .face.bottom, .face-inner.bottom { transform: rotateX(-90deg) translateZ(160px); }
}
</style>