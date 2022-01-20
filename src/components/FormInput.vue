<template>
  <div class="relative">

    <input :id="name" :name="name" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    class=" peer h-8 w-full border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 placeholder-transparent focus:outline-none  focus:ring-transparent px-1" :class="{ 'border-b-4 border-red-500' : invalid }" placeholder=" " autocomplete="off"/>

    <label :for="name" 
    class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-xs">{{label}}</label>

    <!-- <p v-if="error" class=" transition-height text-sm text-red-500 peer-invalid:visible peer-invalid:h-4" :class="{ 'visible h-4' : invalid && error.length, 'invisible h-4' : !invalid }">{{error}}</p> -->
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
    invalid: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      // default: 'required'
    }
  },
}
</script>

<style>

</style>