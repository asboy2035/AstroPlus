<script setup lang="ts">
  import HStack from '@/components/layout/HStack.vue'

  defineProps<{
    temp: number
    compact?: boolean
  }>()
</script>

<template>
  <HStack
    class="temperatureBanner"
    :class="{ compact: compact }"
  >
    <div class="bannerTitle">
      <p>Temp</p>
    </div>

    <h1 class="temperatureValue">{{ temp }}°</h1>
  </HStack>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"
  @use "@/styles/fonts"

  .temperatureBanner
    align-items: center
    background: colors.$backgroundTertiary
    backdrop-filter: blur(2rem) saturate(150%) brightness(150%)
    border-radius: 2rem
    gap: 1.5rem
    padding: 0.75rem

    &.compact
      padding: 0.5rem

      .bannerTitle
        padding: 0.75rem 1rem
        border-radius: 1.5rem

      .temperatureValue
        margin: 0 1rem

    .bannerTitle
      padding: 1.5rem
      background: #ffb94d
      box-shadow: 0 0 1rem #ffb94d
      border-radius: 1.25rem
      opacity: 0.8

    .temperatureValue
      display: flex
      align-items: flex-start
      font-family: fonts.$standard
      margin: 0 2rem
</style>