<template>
  <form action="" class="py-5 grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Personal Details</span>
      <form-input :name="'fname'" :label="'First Name'" :type="'text'"></form-input>
      <form-input :name="'lname'" :label="'Last Name'" :type="'text'"></form-input>
      <form-input :name="'email'" :label="'Email'" :type="'email'"></form-input>
      <form-input :name="'phone'" :label="'Phone'" :type="'tel'"></form-input>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <form-input :name="'address'" :label="'Street Address'" :type="'text'"></form-input>
      <form-input :name="'postcode'" :label="'Post Code'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-4">
      <form-input :name="'DOB'" :label="'Date of Birth'" :type="'text'"></form-input>
      <form-input :name="'license'" :label="'License #'" :type="'text'"></form-input>
      <form-input :name="'Expiry'" :label="'License Expiry'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Vehicle Details</span>
      <form-input :name="'make'" :label="'Make'" :type="'text'"></form-input>
      <form-input :name="'model'" :label="'Model'" :type="'text'"></form-input>
      <form-input :name="'year'" :label="'Year'" :type="'text'"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <form-input :name="'rego'" :label="'Rego #'" :type="'text'"></form-input>
      <form-input :name="'kms'" :label="'Km\'s'" :type="'text'"></form-input>
      <form-select :name="'condition'" :label="'Condition'"  :options="conditions"></form-select>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <form-select :name="'transmission'" :label="'Transmission'" :options="transmissions"></form-select>
      <form-select :name="'fuel'" :label="'Fuel Type'" :options="fuel"></form-select>
      <form-select :name="'vtype'" :label="'Type of Vehicle'"  :options="vtypes"></form-select>
      <label class="grid grid-flow-col gap-3 items-center col-span-full">
        <input type="checkbox" name="" id="" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
    </div>
    <div class="flex flex-col gap-2">      
      <label class="grid grid-flow-col gap-3 items-center">
        <input type="checkbox" name="" id="" class="accent-orange-600 scale-[1.25]">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
  </form>
</template>

<script>
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'
  export default {
    components: {
      FormInput,
      FormSelect
    },
    data() {
      return {
        conditions: ['As New', 'Excellent', 'Above Average', 'Good','Fair', 'Poor', 'Unroadworthy'],
        transmissions: ['Automatic','Manual','Sequential'],
        fuel: ['Petrol','Diesel','Hybrid','Electric'],
        vtypes: ['Sedan 4-door', 'Coupe 2-door', 'Wagon','Hatch 5-door','Hatch 3-door','SUV','4WD','Single Cab Ute','Dual Cab Ute','Van','Truck','Other']
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