<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    :focus-trap="true"
    :click-to-close="false"
    overlay-class="backdrop-blur-lg"
    classes="flex justify-center items-center w-full p-2 mx-auto overflow-y-auto h-screen"
    content-class="absolute top-0 flex flex-col mx-4 border bg-white p-2 my-2 rounded max-w-lg"
  >
    <span class="text-xl font-medium leading-6 flex items-center justify-between text-gray-900">
                Online Application
      <button @click="$emit('cancel', close)"
        type="button"
        class="inline-flex justify-center p-2 px-3 bg-orange-100 border border-transparent rounded-md hover:bg-orange-500 text-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        <i class="far fa-times"></i>
      </button>
    </span>
    
    <div class="flex-grow px-4">
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