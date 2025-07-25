<script setup lang="ts">
  import VStack from '@/components/layout/VStack.vue'
</script>

<template>
  <VStack class="sidebar">
    <slot />
  </VStack>
</template>

<style scoped lang="sass">
  .sidebar
    justify-content: flex-start
    min-width: 20rem
</style>
