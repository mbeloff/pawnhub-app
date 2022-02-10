<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    :focus-trap="true"
    :click-to-close="false"
    :esc-to-close="true"
    overlay-class="backdrop-blur-lg !bg-black/30"
    classes="flex justify-center items-center mx-auto overflow-y-auto absolute top-0 bottom-0 my-2 rounded  "
    content-class="absolute top-0 flex flex-col max-w-lg rounded shadow-lg border border-zinc-700"
  >
  <div class="bg-zinc-900 z-50 w-full p-2 top-0 left-0 rounded-t">
    <h2 class="text-xl font-bold leading-6 flex items-center justify-between text-amber-500">
      Online Application
      <button @click="$emit('cancel', close)"
        type="button"
        class="inline-flex shadow-md justify-center p-2 px-3 bg-amber-500 border border-transparent hover:bg-amber-400 text-amber-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
      <i class="far fa-times"></i>
      </button>
    </h2>
  </div>
    <div class="flex-grow">
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