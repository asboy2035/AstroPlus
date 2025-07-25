<template>
  <div class="planetSelector">
    <div class="carousel">
      <div
        v-for="(planet, index) in planets"
        :key="index"
        class="planet"
        :style="getPlanetStyle(index)"
      >
        <img :src="planet.icon" :alt="planet.name" />
      </div>
      <div class="centerPlanet">
        <img :src="centerPlanet.icon" :alt="centerPlanet.name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const planets = [
  { name: "Mercury", icon: "/icons/mercury.svg" },
  { name: "Venus", icon: "/icons/venus.svg" },
  { name: "Mars", icon: "/icons/mars.svg" },
  { name: "Jupiter", icon: "/icons/jupiter.svg" },
  { name: "Saturn", icon: "/icons/saturn.svg" },
  { name: "Uranus", icon: "/icons/uranus.svg" },
].reverse()

const centerPlanet = { name: "Earth", icon: "/icons/earth.svg" }

function getPlanetStyle(index: number) {
  const total = planets.length
  const angleDeg = (index / (total - 1)) * 180 + 89
  const radius = 200

  const angleRad = (angleDeg * Math.PI) / 180
  const x = radius * Math.cos(angleRad)
  const y = radius * Math.sin(angleRad) - 10 // fix centering

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

  .carousel
    position: relative
    width: 400px
    height: 400px

  .planet
    position: absolute
    top: 50%
    left: 50%
    transform-origin: center center

    img
      width: auto
      height: 3rem
      opacity: 0.6

  .centerPlanet
    position: absolute
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