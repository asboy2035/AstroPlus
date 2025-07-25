<script setup lang="ts">
  import Header from '@/components/header/Header.vue'
  import VStack from '@/components/layout/VStack.vue'
  import Sidebar from '@/components/sidebar/Sidebar.vue'
  import SidebarItem from '@/components/sidebar/SidebarItem.vue'
  import PlanetSelector from '@/components/planetSelector/PlanetSelector.vue'
  import TemperatureBanner from '@/components/TemperatureBanner.vue'
</script>

<template>
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

  <VStack class="planetInfo">
    <img src="/planets/mars.png" alt="Planet" class="planetImage">

    <VStack class="planetInfoText">
      <h1 class="planetTitle">Mars</h1>
      <h3 class="planetSubtitle">The 5th planet of the solar system.</h3>
    </VStack>
  </VStack>

  <TemperatureBanner class="temp" :temp="38" />

  <PlanetSelector class="planetPicker" />

  <img
    class="appBackground"
    src="/App-Background.png"
    alt="Starry Sky"
  >
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
      width: 50vw
      max-width: 80vh
      height: auto
      position: relative
      z-index: 10

    .planetInfoText
      margin-top: -15rem
      z-index: 11

      .planetTitle
        font-size: 10rem

      .planetSubtitle
        font-family: fonts.$standard
        margin-top: -2rem
        margin-left: 0.75rem
        font-size: 2rem
        opacity: 0.4

  .temp
    position: fixed
    top: 70vh
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
</style>
