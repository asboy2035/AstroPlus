<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import PlanetsView from '@/views/PlanetsView.vue'
  import MobilePlanetsView from '@/views/MobilePlanetsView.vue'

  const isMobile = ref(false)

  const updateIsMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 50rem)').matches
  }

  onMounted(() => {
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile)
  })
</script>

<template>
  <div class="planetsViewsContainer">
    <PlanetsView v-if="!isMobile" />
    <MobilePlanetsView v-else />
  </div>
</template>

<style scoped lang="sass">
  .planetsViewsContainer
    position: relative
    display: flex
    padding: 2rem
    top: 0
    bottom: 0
    left: 0
    right: 0
    max-width: calc(100vw - 4rem)
    overflow: hidden

  @media (max-width: 50rem)
    .planetsViewsContainer
      padding: 1rem
      max-width: calc(100vw - 2rem)
</style>
