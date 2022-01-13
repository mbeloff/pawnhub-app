<template>
  <form action="" class="py-10 grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <form-input :name="'fname'" :label="'First Name'" :type="'text'"></form-input>
      <form-input :name="'lname'" :label="'Last Name'" :type="'text'"></form-input>
      <form-input :name="'email'" :label="'Email'" :type="'email'"></form-input>
      <form-input :name="'phone'" :label="'Phone'" :type="'tel'"></form-input>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <form-input :name="'address'" :label="'Street Address'" :type="'text'"></form-input>
      <form-input :name="'postcode'" :label="'Post Code'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <form-input :name="'DOB'" :label="'Date of Birth'" :type="'date'"></form-input>
      <form-input :name="'license'" :label="'License #'" :type="'text'"></form-input>
      <form-input :name="'Expiry'" :label="'License Expiry'" :type="'date'"></form-input>
    </div>
    <div class="flex flex-col gap-2">
      <label class="grid grid-flow-col gap-3 items-center">
        <input type="checkbox" name="" id="" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">My Vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label class="grid grid-flow-col gap-3 items-center">
        <input type="checkbox" name="" id="" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
  </form>
</template>

<script>
import FormInput from '@/components/FormInput.vue'
  export default {
    components: {
      FormInput
    },
    data() {
      return {
      }
    },
    mounted() {
      this.ofAge()
    },
    methods: {
      ofAge() {
        let year = new Date().getFullYear()-18
        let theDate = new Date(year, 0, 1)
        console.log(theDate)
      }
    }
  }
</script>

<style lang="postcss">
</style>