<script setup lang="ts">
  import Header from '@/components/header/Header.vue'
  import VStack from '@/components/layout/VStack.vue'
  import Sidebar from '@/components/sidebar/Sidebar.vue'
  import SidebarItem from '@/components/sidebar/SidebarItem.vue'
  import PlanetSelector from '@/components/planetSelector/PlanetSelector.vue'
  import TemperatureBanner from '@/components/TemperatureBanner.vue'
  import { usePlanetStore } from '@/store/planets'
  import { storeToRefs } from 'pinia'

  const planetStore = usePlanetStore()
  const { selectedPlanet } = storeToRefs(planetStore)
</script>

<template>
  <div class="planetsView">
    <Header />

    <Sidebar class="appSidebar">
      <SidebarItem
        title="Planets"
        icon="solar:planet-3-line-duotone"
        selected
      />

      <a href="https://asboy2035.com">
        <SidebarItem
          title="Main Site"
          icon="solar:home-angle-line-duotone"
        />
      </a>
    </Sidebar>

    <VStack v-if="selectedPlanet" class="planetInfo">
      <img :src="selectedPlanet.image.png" :alt="selectedPlanet.name" class="planetImage">

      <VStack class="planetInfoText">
        <h1 class="planetTitle">{{ selectedPlanet.name }}</h1>
        <p class="planetSubtitle">{{ selectedPlanet.description }}</p>
      </VStack>
    </VStack>

    <TemperatureBanner
      v-if="selectedPlanet"
      class="temp"
      :temp="parseInt(selectedPlanet.temperature)"
    />

    <PlanetSelector class="planetPicker" />

    <img
      class="appBackground"
      src="/App-Background.png"
      alt="Starry Sky"
    >
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/fonts"

  .appSidebar
    position: fixed
    top: 16rem
    left: 0

  .planetInfo
    margin-left: 15vw
    margin-top: -8rem

    .planetImage
      width: 60vw
      max-width: 80vh
      min-height: 40vh
      height: auto
      position: relative
      z-index: 10

    .planetInfoText
      position: relative
      margin-top: -18rem
      z-index: 11

      .planetTitle
        font-size: 10rem

      .planetSubtitle
        font-family: fonts.$standard
        margin-top: -1.5rem
        margin-left: 0.75rem
        font-size: 1.2rem
        opacity: 0.4
        max-width: 30rem

  .temp
    position: fixed
    top: 60vh
    left: 50vw
    z-index: 20

  .planetPicker
    position: fixed
    top: 0
    right: 0

  .appBackground
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    min-width: 100vw
    min-height: 100vh
    z-index: -2

  @media (max-height: 60rem)
    .planetInfo
      position: fixed
      z-index: 19
      bottom: 2rem
</style>
