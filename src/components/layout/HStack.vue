<template>
  <div class="hStack">
    <slot />
  </div>
</template>

<style scoped lang="sass">
  .hStack
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 0.25rem
</style>
