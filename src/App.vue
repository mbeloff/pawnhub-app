<template>
  <div class="bg-zinc-900 min-h-screen grid app">
    <nav-bar></nav-bar>

    <main-modal name="form" v-model="show" @cancel="cancel" :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }">
      <form-apply></form-apply>
    </main-modal>

    <vue-final-modal v-model="showConfirmation" name="dialog-confirmation" overlay-class="backdrop-blur-lg" :focus-trap="true" :click-to-close="false" :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl flex flex-col p-4 gap-2 w-full max-w-md text-center">

        <div class="-mt-10 mx-auto flex items-center justify-center h-24 w-24 rounded-full text-green-400 bg-green-100">
          <i class="far fa-check fa-2x inline-block mt-1"></i>       
        </div>
        <p class="text-xl font-bold leading-6 text-amber-500">Message Received</p>
        <p>We will be in touch shortly</p>
        <button @click.prevent="closeAll" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-amber-400 px-6 w-max mx-auto">Okay</button>
      </div>
    </vue-final-modal>
   
    <vue-final-modal v-model="showError" name="dialog-error" overlay-class="backdrop-blur-lg" :focus-trap="true" :click-to-close="false" :transition="{
        'enter-active-class': 'transition duration-200 ease-in-out transform',
        'enter-from-class': 'translate-y-full',
        'enter-to-class': 'translate-y-0',
        'leave-active-class': 'transition duration-200 ease-in-out transform',
        'leave-to-class': 'translate-y-full',
        'leave-from-class': 'translate-y-0'
      }">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl flex flex-col p-4 gap-2 w-full max-w-md text-center">
        <div class="-mt-10 mx-auto flex items-center justify-center h-24 w-24 rounded-full text-red-300 bg-red-100">
          <i class="far fa-times fa-2x inline-block mt-1"></i>       
        </div>
        <p class="text-xl font-bold leading-6 text-amber-500">Something went wrong</p>
        <p>Please try again, and contact us if the error persists.</p>
        <button @click.prevent="closeError" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-amber-400 px-6 w-max mx-auto">Okay</button>
      </div>
    </vue-final-modal>

    <main class="mt-20">
      <router-view />
    </main>

    <foot-bar></foot-bar>
  </div>
</template>


<script>
  import NavBar from '@/components/NavBar.vue'
  import FootBar from '@/components/Footer.vue'
  import FormApply from '@/components/FormApply.vue'
  import MainModal from '@/components/MainModal.vue'
  export default {
    components: {
      NavBar,
      FootBar,
      FormApply,
      MainModal
    },
    data: () => ({
      show: false,
      showConfirmation: false,
      showError: false,
    }),
    methods: {
      cancel(close) {
        // some code...
        close()
      },
      closeAll() {
        this.$vfm.hide('form')
        setTimeout(this.closeConfirmation, 500)
        
      },
      closeConfirmation() {
        this.$vfm.hide('dialog-confirmation')
      },
      closeError() {
        this.$vfm.hide('dialog-error')
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