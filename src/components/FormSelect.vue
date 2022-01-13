<template>
  <div class="relative">
    <select :name="name" :id="name" class="peer h-8 w-full border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 placeholder-transparent focus:outline-none  focus:ring-transparent px-1" v-model="value">
      <option v-for="option in options">{{option}}</option>
    </select>

    <label :for="name" 
    class="px-1 pointer-events-none absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-focus:-top-3.5 peer-focus:text-orange-400 peer-focus:text-xs" :class="{'text-gray-500 top-2' : !value}">{{label}}</label>
   
    <p class="invisible h-8 transition-height peer-invalid:visible peer-invalid:h-14 text-sm text-orange-500">Please select a {{label.toLowerCase()}}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
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