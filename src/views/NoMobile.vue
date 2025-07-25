<script setup lang="ts">
  import {Icon} from '@iconify/vue'
</script>

<template>
  <div class="noMobile">
    <Icon icon="solar:laptop-2-line-duotone" />
    <h1>Mobile is not supported yet.</h1>
    <h2>Please use your computer!</h2>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .noMobile
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 100
    padding: 1rem

    background: colors.$backgroundColor
    text-align: center

    svg
      width: 8rem
      height: 8rem

    h2
      opacity: 0.4

  @media (min-width: 75rem)
    @media (min-height: 50rem)
      .noMobile
        display: none !important
</style>