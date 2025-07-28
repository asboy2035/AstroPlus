<script setup lang="ts">
  import HStack from '@/components/layout/HStack.vue'
  import {Icon} from '@iconify/vue'

  defineProps<{
    name: string
    value: string
    icon: string
    color: string
  }>()
</script>

<template>
  <div
    class="headerInfoCard"
    :style="{ '--cardColor': color }"
  >
    <HStack class="infoCardHeader">
      <div class="infoCardIconWrapper">
        <Icon :icon="icon" class="infoCardIcon" />
      </div>

      <p class="infoKey">{{ name }}</p>
    </HStack>

    <h3 class="infoCardValue">{{ value }}</h3>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"
  @use "@/styles/fonts"

  .headerInfoCard
    position: relative
    padding: 1rem
    height: 12rem
    min-width: 18rem
    background: colors.$backgroundTertiary
    backdrop-filter: blur(1rem)
    border-radius: 2.25rem
    flex-grow: 1
    display: flex
    flex-direction: column
    z-index: 6
    user-select: none

    &::before
      content: ""
      position: absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      background: var(--cardColor)
      border-radius: 2.25rem
      opacity: 0.2

    .infoCardHeader
      width: 100%
      align-items: center
      gap: 0.5rem

      .infoCardIconWrapper
        position: relative
        width: 3.75rem
        height: 3.75rem
        background: colors.$backgroundTertiary
        overflow: hidden
        border-radius: 1.25rem
        display: flex
        align-items: center
        justify-content: center
        backdrop-filter: saturate(200%)

        &::before
          content: ""
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0

          background: colors.$foregroundPrimary
          filter: blur(1rem)
          opacity: 0.2

        svg
          width: 1.5rem
          height: 1.5rem

      .infoKey
        height: fit-content
        font-family: fonts.$standard
        font-size: 1.25rem
        opacity: 0.4
        margin: 0

    .infoCardValue
      display: flex
      align-items: center
      justify-content: center
      font-family: fonts.$standard
      width: 100%
      flex-grow: 1
      font-size: 2.5rem
      text-align: center
</style>