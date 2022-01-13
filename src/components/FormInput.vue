<template>
  <div class="relative">

    <input :id="name" :name="name" :type="type"
    class="peer h-8 w-full border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 placeholder-transparent focus:outline-none  focus:ring-transparent px-1" placeholder=" " />

    <label :for="name" 
    class="px-1 pointer-events-none absolute left-0 -top-3.5 text-gray-400 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-xs">{{label}}</label>

    <p class="invisible h-8 transition-height peer-invalid:visible peer-invalid:h-14 text-sm text-orange-500">Please enter a valid {{label.toLowerCase()}}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
    },
    label: {
      type: String
    },
    options: {
      type: Array
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>