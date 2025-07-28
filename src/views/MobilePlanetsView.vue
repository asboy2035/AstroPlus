<script setup lang="ts">
  import Header from '@/components/header/Header.vue'
  import VStack from '@/components/layout/VStack.vue'
  import PlanetSelector from '@/components/planetSelector/PlanetSelector.vue'
  import TemperatureBanner from '@/components/TemperatureBanner.vue'
  import { usePlanetStore } from '@/store/planets'
  import { storeToRefs } from 'pinia'

  const planetStore = usePlanetStore()
  const { selectedPlanet } = storeToRefs(planetStore)
</script>

<template>
  <VStack class="mobilePlanetsView">


    <img
      class="appBackground"
      src="/App-Background.png"
      alt="Starry Sky"
    >

    <img v-if="selectedPlanet" :src="selectedPlanet.image.png" :alt="selectedPlanet.name" class="planetImage">
    <PlanetSelector
      class="planetPicker"
      horizontal
    />

    <VStack
      v-if="selectedPlanet"
      class="planetInfo"
    >
      <VStack class="planetInfoText">
        <h1 class="planetTitle">{{ selectedPlanet.name }}</h1>
        <TemperatureBanner
          v-if="selectedPlanet"
          class="temp"
          :temp="parseInt(selectedPlanet.temperature)"
          compact
        />

        <p class="planetSubtitle">{{ selectedPlanet.description }}</p>
      </VStack>

      <Header hide-logo class="info" />
    </VStack>
  </VStack>
</template>

<style scoped lang="sass">
  @use "@/styles/fonts"

  $fullWidth: calc(100vw - 2rem)

  .mobilePlanetsView
    display: flex
    flex-direction: column
    min-height: calc(100dvh - 2rem)
    overflow-y: scroll
    width: 100%

  .planetImage
    width: 60vh
    max-width: $fullWidth
    height: auto
    z-index: 10

  .planetSelector
    margin-top: -8rem

  .planetInfo
    height: 10rem
    flex-grow: 1
    margin-top: -8rem

    .planetInfoText
      z-index: 11
      width: $fullWidth

      .planetTitle
        font-size: 3rem

      .temp
        width: fit-content

      .planetSubtitle
        font-family: fonts.$standard
        font-size: 1.2rem
        opacity: 0.4
        max-width: 30rem

    .info
      width: $fullWidth
      margin-bottom: 4rem

  .appBackground
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100vw
    height: 100vh
    z-index: -2
</style>
