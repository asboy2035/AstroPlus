<template>
  <div class="vStack">
    <slot />
  </div>
</template>

<style scoped lang="sass">
  .vStack
    display: flex
    flex-direction: column
    flex-wrap: wrap
    gap: 0.25rem
</style>
