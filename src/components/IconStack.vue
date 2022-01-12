<template>
  <span class="fa-stack -mb-2" :class="size">
    <i class="fas fa-square fa-stack-2x" :class="bg"></i>
    <i class="fat fa-stack-1x text-amber-500" :class="'fa-' + icon"></i>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'terminal'
    },
    size: {
      type: String,
      default: 'fa-4x'
    },
    bg: {
      type: String,
      default: 'text-black/0'
    }
  }
}
</script>

<style>

</style>