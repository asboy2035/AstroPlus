<template>
  <div class="planetSelector">
    <div
      class="carousel"
      :class="{ horizontalPlanets: horizontal }"
    >
      <div
        v-for="(planet, index) in carouselPlanets"
        :key="planet.name"
        class="planet"
        :style="getPlanetStyle(index)"
        @click="selectPlanet(planet.name)"
      >
        <img
          :src="planet.image.svg"
          :alt="planet.name"
        />
      </div>

      <div
        v-if="selectedPlanet"
        class="centerPlanet"
      >
        <img
          :src="selectedPlanet.image.svg"
          :alt="selectedPlanet.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePlanetStore } from '@/store/planets'
  import { storeToRefs } from 'pinia'
  import { computed, onMounted } from 'vue'

  const planetStore = usePlanetStore()
  const { planets, selectedPlanet } = storeToRefs(planetStore)
  const { selectPlanet } = planetStore

  onMounted(() => {
    if (!selectedPlanet.value) {
      selectPlanet('Earth')
    }
  })

  const { horizontal = false } = defineProps<{
    horizontal?: boolean
  }>()

  const carouselPlanets = computed(() => {
    return planets.value.filter(p => p.name !== selectedPlanet.value?.name).reverse()
  })

  function getPlanetStyle(index: number) {
    const total = carouselPlanets.value.length
    const angleDeg = (index / (total - 1)) * 180 + 89
    let radius

    if (horizontal) {
      radius = 150
    } else {
      radius = 200
    }

    const angleRad = (angleDeg * Math.PI) / 180
    const x = radius * Math.cos(angleRad)
    const y = radius * Math.sin(angleRad) - 24 // fix centering

    return {
      transform: `translate(${x}px, ${y}px)`,
    }
  }
</script>

<style scoped lang="sass">
  @use "@/styles/colors"

  .planetSelector
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    transform: translateX(calc(50% - 6rem))
    z-index: 15

  .planetSelector:has(.horizontalPlanets)
    height: fit-content
    width: 100%
    transform: none

  .carousel
    position: relative
    width: 25rem
    height: 25rem

    &.horizontalPlanets
      transform: rotate(91deg)

      .planet
        img
          transform: rotate(-90deg)

      .centerPlanet
        img
          transform: rotate(-90deg)

    .planet
      position: absolute
      top: 50%
      left: 50%
      transform-origin: center center
      cursor: pointer
      transition: all 0.2s ease-in-out

      &:hover
        transform: scale(1.1)

      img
        width: auto
        height: 3rem
        opacity: 0.6

  .centerPlanet
    position: absolute
    display: flex
    align-items: center
    justify-content: center
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background: radial-gradient(circle at center, colors.$accentColor, #000)
    padding: 1.5rem
    border-radius: 50%
    box-shadow: 0 0 2rem colors.$accentColor
    z-index: 10

    img
      width: 4rem
      height: 4rem
</style>