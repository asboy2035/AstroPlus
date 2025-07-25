<script setup lang="ts">
  import {Icon} from '@iconify/vue'

  defineProps<{
    icon: string
    title: string
    selected?: boolean
  }>()
</script>

<template>
  <div
    class="sidebarItem"
    :class="{ selected: selected }"
  >
    <Icon class="sidebarItemIcon" :icon="icon" />

    <h3>{{ title }}</h3>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .sidebarItem
    --borderRadius: 0 2rem 2rem 0

    display: flex
    position: relative
    padding: 1rem 2rem
    gap: 0.75rem
    border-radius: var(--borderRadius)
    user-select: none
    align-items: center
    width: fit-content
    cursor: pointer

    &.selected
      background: colors.$backgroundSecondary

      &::before
        position: absolute
        content: ''
        top: 0
        bottom: 0
        left: 0
        right: 0

        border-radius: var(--borderRadius)
        background: colors.$accentColor
        z-index: -1
        opacity: 0.4

    .sidebarItemIcon
      width: 2rem
      height: 2rem

    h3
      margin: 0
</style>