<template>
  <div class="relative">

    <input :id="name" :name="name" :type="type" :required="req" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="isRequired"
    class="peer h-8 w-full border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 placeholder-transparent focus:outline-none  focus:ring-transparent px-1" placeholder=" "/>

    <label :for="name" 
    class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-xs">{{label}}</label>

    <p class="invisible h-8 transition-height peer-invalid:visible peer-invalid:h-14 text-sm text-red-500">Please enter a valid {{label.toLowerCase()}}</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
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
    req: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    isRequired() {
      if (this.req && !modelValue) {
        return true
      }
    }
  }
}
</script>

<style>

</style>