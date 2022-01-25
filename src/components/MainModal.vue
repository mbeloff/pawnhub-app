<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    :focus-trap="true"
    :click-to-close="false"
    :esc-to-close="true"
    overlay-class="backdrop-blur-lg"
    classes="flex justify-center items-center mx-auto overflow-y-auto absolute top-0 bottom-0 my-2"
    content-class="absolute top-0 flex flex-col bg-zinc-200 max-w-lg"
  >
  <div class="bg-amber-500 z-50 w-full p-2 top-0 left-0">
    <h2 class="text-xl font-bold leading-6 flex items-center justify-between text-white">
      Online Application
      <button @click="$emit('cancel', close)"
        type="button"
        class="inline-flex shadow-md justify-center p-2 px-3 bg-amber-200 border border-transparent hover:bg-amber-400 text-amber-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
      <i class="far fa-times"></i>
      </button>
    </h2>
  </div>
    

    

    <div class="flex-grow p-2">
      <slot :params="params"></slot>
    </div>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'FormModal',
  inheritAttrs: false,
  emits: ['cancel']
}
</script>

<style >
</style>