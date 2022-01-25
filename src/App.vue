<template>
  <div class="bg-stone-900 min-h-screen grid app">
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

    <vue-final-modal v-model="showConfirmation" name="confirmation" overlay-class="backdrop-blur-lg" :focus-trap="true" :click-to-close="false" :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl flex flex-col p-4 gap-2 w-full max-w-md text-center">

        <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p class="text-xl font-bold leading-6 text-amber-500">Application Received</p>
        <p>We will be in touch shortly</p>
        <button @click.prevent="closeAll" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-amber-400 px-6 w-max mx-auto">Okay</button>
      </div>
    </vue-final-modal>

    <main class="pt-20">
      <router-view />
    </main>

    <foot-bar></foot-bar>
  </div>
</template>


<script>
  import NavBar from '@/components/NavBar.vue'
  import FootBar from '@/components/Footer.vue'
  import FormApply from '@/components/FormApply.vue'
  import FormModal from '@/components/FormModal.vue'
  export default {
    components: {
      NavBar,
      FootBar,
      FormApply,
      FormModal
    },
    data: () => ({
      show: false,
      showConfirmation: false,
    }),
    methods: {
      cancel(close) {
        // some code...
        close()
      },
      closeAll() {
        // this.$vfm.hide('confirmation').then(this.$vfm.hide('form'))
        this.$vfm.hide('form')
        // this.$vfm.hide('confimation')
        setTimeout(this.closeConfirmation, 500)
        
      },
      closeConfirmation() {
        this.$vfm.hide('confirmation')
      }
    },
    watch: {
      'show': function (val) {
        if (val == true) {
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'auto'
        }
      }
    },
  }
</script>

<style>
  * {
    scroll-behavior: smooth
  }

  .app {
    grid-template-rows:  1fr auto
  }
</style>