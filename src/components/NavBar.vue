<template>
<header class="sticky top-0 backdrop-blur z-50">
<div class="w-full overflow-x-hidden">
  <div class="bg-stone-900/80 w-full h-20 shadow-xl border-b border-stone-100/5">
    <div class="flex justify-between container px-4 mx-auto h-full items-center">
      <img src="../assets/pawnhub_logo.svg" alt="" class="w-32">
      <div class="flex items-center gap-5">
        <a href="" class="text-xl text-amber-500 font-black min-w-max">1800 123 456</a>
      <button @click="hide = !hide" class="bg-stone-700 w-10 h-10 rounded md:hidden"><i class="far fa-bars fa-fw fa-2x text-amber-500"></i></button>
      </div>
      
    </div>
  </div>
  <div class="bg-stone-800/50 transition-transform translate-x-0" :class="{'hide': hide}">
    <div class="container mx-auto flex">
      <div class="text-stone-300 flex flex-col w-full md:flex-row text-sm" >
        <a class="nav-item" href="">Home</a>
        <a class="nav-item" href="">About</a>
        <a class="nav-item" href="">Cash for Cars</a>
        <a class="nav-item" href="">FAQ's</a>
        <a class="nav-item" href="">Apply Online</a>
        <a class="nav-item" href="">Contact</a>
      </div>
    </div>
  </div>
</div>
  </header>
</template>

<script>
export default {
data() {
  return {
    hide: true
  }
}
}
</script>

<style lang="postcss">

  .hide {
    @apply translate-x-full h-0 md:translate-x-0 md:h-auto
  }

  .nav-item {
    @apply py-2 px-3 transition-colors duration-100
  }

  .nav-item:hover {
    @apply bg-amber-500 text-stone-900
  }
</style>