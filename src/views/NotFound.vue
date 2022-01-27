<template>
  <div class="bg-zinc-900 h-full grid items-center">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold leading-tight text-zinc-300"><span class="text-amber-500">/</span> Page Not Found</h1>
      <router-link :to="{name: 'Home'}" class="text-zinc-400 hover:text-amber-500"><i class="fal fa-arrow-left mr-2"></i>Click here to go home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>