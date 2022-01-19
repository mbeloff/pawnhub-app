<template>
<header id="nav" class="fixed w-screen top-0 z-50 shadow-lg">
<div class="w-full overflow-x-hidden ">
  <div class="bg-stone-900/90 backdrop-blur w-full h-20 shadow-xl border-b border-stone-100/5">
    <div class="flex justify-between container px-4 mx-auto h-full items-center">
      <img src="../assets/pawnhub_logo.svg" alt="" class="w-24 mr-2">
      <div class="flex items-center h-full">
        <a href="" class="text-lg text-amber-500 font-black min-w-max">1800 123 456</a>
      <icon-stack class="md:hidden -mr-3" @click="hide = !hide" :icon="'bars'" :size="'fa-2x'" :bg="'text-black/30'"></icon-stack>
      </div>
      
    </div>
  </div>
  <div class="backdrop-blur bg-stone-800/80 transition-transform translate-x-0 shadow-lg shadow-black" :class="{'hide': hide}">
    <div class="container mx-auto flex" :class="{ 'invi md:flex hidden' : hide }">
      <div class="text-stone-300 flex flex-col w-full md:flex-row text-sm py-2 md:py-0" >
        <a class="nav-item" href="">Home</a>
        <a class="nav-item" href="">About</a>
        <a class="nav-item" href="">Cash for Cars</a>
        <a class="nav-item" href="">FAQ's</a>
        
        <a class="nav-item" href="">Contact</a>
        <button @click="$vfm.show('form')" class="nav-item text-amber-500 font-bold text-left">Apply Now</button>
      </div>
    </div>
  </div>
</div>
  </header>
</template>

<script>
import IconStack from "@/components/IconStack.vue"
export default {
  components: {IconStack},
  data() {
    return {
      hide: true
    }
  }
}
</script>

<style lang="postcss">

  .hide {
    @apply translate-x-full md:translate-x-0 
  }

  .nav-item {
    @apply py-2 px-3 transition-colors duration-100
  }

  .nav-item:hover {
    @apply bg-amber-500 text-stone-900
  }
</style>