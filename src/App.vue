
<template>
  <div class="bg-stone-900">     
    <nav-bar></nav-bar>
    <main>
      <router-view />
    </main>
    <foot-bar></foot-bar>
  </div>
</template>


<script >
import NavBar from '@/components/NavBar.vue'
import FootBar from '@/components/Footer.vue'
export default {
  components: {NavBar, FootBar}
}
</script>

