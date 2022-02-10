<template>
<header id="nav" class="fixed w-screen top-0 z-50 shadow-lg shadow-black/30">
<div class="w-full overflow-x-hidden ">
  <div class="bg-zinc-900/90 backdrop-blur w-full h-20 shadow-xl border-b border-zinc-100/5">
    <div class="flex justify-between container px-4 mx-auto h-full items-center">
      <router-link :to="{name: 'Home'}"><img src="../assets/pawnhub_logo.svg" alt="" class="h-6 mr-2"></router-link> 
      <div class="flex items-center h-full">
        <a :href="`tel:${common.phoneLand.replaceAll(' ', '')}`" class="text-lg text-amber-500 font-black min-w-max">{{common.phoneLand}}</a>
      <icon-stack class="md:hidden -mr-3" @click="hide = !hide" :icon="'bars'" :size="'fa-2x'" :bg="'text-black/30'"></icon-stack>
      </div>
    </div>
  </div>
  <div class="backdrop-blur bg-zinc-800/80 transition-transform translate-x-0 shadow-lg shadow-black" :class="{'hide': hide}">
    <div class="container mx-auto flex" :class="{ 'md:flex hidden' : hide }">
      <div class="text-zinc-300 flex flex-col w-full md:flex-row text-sm py-2 md:py-0" >
        <router-link class="nav-item" :to="{name: 'Home'}">Home</router-link>
        <router-link class="nav-item" :to="{name: 'About'}">About</router-link>
        <router-link class="nav-item" :to="{name: 'Pawn'}">Cash for Cars</router-link>
        <router-link class="nav-item" :to="{name: 'Faq'}">FAQ's</router-link>        
        <router-link class="nav-item" :to="{name: 'Contact'}">Contact</router-link>
        <button @click="$vfm.show('form')" class="nav-item text-amber-500 font-bold text-left">Apply Now</button>
      </div>
    </div>
  </div>
</div>
  </header>
</template>

<script>
import Common from '@/common.js'
import IconStack from "@/components/IconStack.vue"
export default {
  components: {IconStack},
  data() {
    return {
      hide: true,
      common: Common
    }
  },
  watch: {
    $route: function() {
      this.hide = true
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
    @apply bg-amber-500 text-zinc-900
  }
</style>