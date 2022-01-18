<template>
  <div class="relative">
    <select :name="name" :id="name" class="peer h-8 w-full border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 placeholder-transparent focus:outline-none  focus:ring-transparent px-1" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"  :class="{ 'border-b-4 border-red-500' : invalid }">
      <option v-for="option in options">{{option}}</option>
    </select>

    <label :for="name" 
    class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-focus:-top-3.5 peer-focus:text-orange-400 !peer-focus:text-xs" :class="{'text-stone-500 top-2 !text-sm !peer-focus:text-xs' : !modelValue.length}">{{label}}</label>
   
    <p class=" transition-height text-sm text-red-500" :class="{ 'peer-invalid:visible peer-invalid:h-14' : invalid, 'invisible h-4' : !invalid }">{{error}}</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,  
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
    options: {
      type: Array
    },
    invalid: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: 'required'
    }
  },
}
</script>

<style>

</style>