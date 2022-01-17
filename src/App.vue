
<template>
  <div class="bg-stone-900">     
    <nav-bar></nav-bar>
    
    <form-modal name="form" v-model="show" @cancel="cancel" :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }">
      <form-apply></form-apply>
    </form-modal>

    <main class="pt-20">
      <router-view />
    </main>
    
    <foot-bar></foot-bar>
  </div>
</template>


<script >
import NavBar from '@/components/NavBar.vue'
import FootBar from '@/components/Footer.vue'
import FormApply from '@/components/FormApply.vue'
import FormModal from '@/components/FormModal.vue'
export default {
  components: {NavBar, FootBar, FormApply, FormModal},
  data: () => ({
    show: false
  }),
  methods: {
    cancel(close) {
      // some code...
      close()
    }
  },
  watch: {
    'show': function(val) {
      if (val == true) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
  },
}
</script>

