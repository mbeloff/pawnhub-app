<template>
  <span class="fa-stack fa-4x">
    <i class="fas fa-square fa-stack-2x text-black opacity-0"></i>
    <i class="fat fa-stack-1x text-amber-500" :class="'fa-' + icon"></i>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'terminal'
    }
  }
}
</script>

<style>

</style>