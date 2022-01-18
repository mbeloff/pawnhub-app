<template>
  <form ref="appForm" class="py-5 grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Personal Details</span>
      <form-input 
      ref="firstName"  :name="'firstName'" :label="'First Name'" :type="'text'"  v-model="form.firstName" :invalid="isInvalid('firstName')" @input="removeError('firstName')">
      </form-input>
      <form-input 
      ref="lastName" :name="'lastName'" :label="'Last Name'" :type="'text'" v-model="form.lastName"  :invalid="isInvalid('lastName')" @input="removeError('lastName')"></form-input>
      <form-input 
      ref="email" :name="'email'" :label="'Email'" :type="'email'" :error="'Enter a valid email address'" v-model="form.email" :invalid="isInvalid('email')" @input="removeError('email')"></form-input>
      <form-input 
      ref="phone" :name="'phone'" :label="'Phone'" :type="'tel'" v-model="form.phone" :invalid="isInvalid('phone')" @input="removeError('phone')"></form-input>
      <form-input 
      ref="address" :name="'address'" :label="'Street Address'" :type="'text'" v-model="form.address" :invalid="isInvalid('address')" @input="removeError('address')"></form-input>
      <form-input 
      ref="postcode" :name="'postcode'" :label="'Post Code'" :type="'text'" v-model="form.postcode" :invalid="isInvalid('postcode')" @input="removeError('postcode')"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-4">
      <div class="flex w-full relative text-stone-500 focus-within:text-orange-500">        
        <input
         ref="dobD" @focus="$event.target.select()" maxlength="2" type="text" placeholder="DD" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[30%]" v-model.string="form.dobD" @input="handleInput($event,'dobM'), removeError('dobD')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobD')}">
        <span class="text-orange-500 opacity-50">/</span>
        <input
         ref="dobM" @focus="$event.target.select()" maxlength="2" type="text" placeholder="MM" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[30%]" v-model.string="form.dobM" @input="handleInput($event, 'dobY'), removeError('dobM')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobM')}">
        <span class="text-orange-500 opacity-50">/</span>
        <input
         ref="dobY" @focus="$event.target.select()" maxlength="4" type="text" placeholder="YYYY" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[40%]" v-model.string="form.dobY" @input="handleInput, removeError('dobY')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobY')}">
        <label class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">Date of Birth</label>
      </div>
      <form-input
       ref="licenseNo" maxlength="11" :name="'license'" :label="'License #'" :type="'text'" v-model="form.licenseNo" :invalid="isInvalid('licenseNo')" @input="removeError('licenseNo')"></form-input>
      <div class="flex w-full relative text-stone-500 focus-within:text-orange-500">        
        <input
         ref="expD" @focus="$event.target.select()" maxlength="2" type="text" placeholder="DD" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[30%]" v-model.string="form.expD" @input="handleInput($event,'expM'), removeError('expD')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}">
        <span class="text-orange-500 opacity-50">/</span>
        <input
         ref="expM" @focus="$event.target.select()" maxlength="2" type="text" placeholder="MM" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[30%]" v-model.string="form.expM" @input="handleInput($event, 'expY'), removeError('expM')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}">
        <span class="text-orange-500 opacity-50">/</span>
        <input
         ref="expY" @focus="$event.target.select()" maxlength="4" type="text" placeholder="YYYY" class="peer h-8 border-b-2 focus:border-orange-500 border-t-0 border-l-0 border-r-0 text-stone-900 border-orange-500/50 focus:outline-none  focus:ring-transparent px-1 text-center w-[40%]" v-model.string="form.expY" @input="handleInput, removeError('expY')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}">
        <label for="" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">License Expiry</label>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3  gap-x-4">
      <span class="col-span-full text-sm mb-6 uppercase text-orange-500 text-center">Vehicle Details</span>
      <form-input
      ref="make" :name="'make'" :label="'Make'" :type="'text'" v-model="form.make" :invalid="isInvalid('make')" @input="removeError('make')"></form-input>
      <form-input
      ref="model" :name="'model'" :label="'Model'" :type="'text'" v-model="form.model" :invalid="isInvalid('model')" @input="removeError('model')"></form-input>
      <form-select
      ref="year" :name="'year'" :label="'Year'" :options="years" v-model="form.year" :invalid="isInvalid('year')" @input="removeError('year')"></form-select>
       <form-input
       ref="rego" :name="'rego'" :label="'Rego #'" :type="'text'" v-model="form.rego" :invalid="isInvalid('rego')" @input="removeError('rego')"></form-input>
      <form-input
      ref="kms" :name="'kms'" :label="'Km\'s'" :type="'text'" v-model="form.kms" :invalid="isInvalid('kms')" @input="removeError('kms')"></form-input>
      <form-select
      ref="condition" class="col-span-full sm:col-span-1" :name="'condition'" :label="'Condition'" :options="conditions" v-model="form.condition" :invalid="isInvalid('condition')" @input="removeError('condition')"></form-select>
      <form-select
      ref="transmission" :name="'transmission'" :label="'Transmission'" :options="transmissions" v-model="form.transmission" :invalid="isInvalid('transmission')" @input="removeError('transmission')"></form-select>
      <form-select
      ref="fuel" :name="'fuel'" :label="'Fuel Type'" :options="fuel" v-model="form.fuel" :invalid="isInvalid('fuel')" @input="removeError('fuel')"></form-select>
      <form-select
      ref="vehicleType" class="col-span-full sm:col-span-1" :name="'vtype'" :label="'Type of Vehicle'" :options="vtypes" v-model="form.vehicleType" :invalid="isInvalid('vehicleType')" @input="removeError('vehicleType')"></form-select>
    </div>
    <div class="w-full flex flex-col relative my-4">
      <input 
      class="accent-orange-500 peer" type="range" name="amount" id="amount" min="5000" max="50000" step="2500" v-model.number="form.amount">
      <label for="amount" class="px-1 pointer-events-none absolute left-0 -top-8 text-stone-500 text-sm transition-all peer-focus:text-orange-400 peer-hover:text-orange-400 w-full flex justify-between items-center">Requested Loan Amount: <span class="text-base text-orange-500 font-bold">${{form.amount.toLocaleString()}}</span></label>
    </div>

    <div class="flex flex-col gap-2">
      <label for="statusaccept" class="grid grid-flow-col gap-3 items-center">
        <input  
        type="checkbox" name="statusaccept" id="statusaccept" class="accent-orange-600 scale-[1.25]" required>
        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label for="securityaccept" class="grid grid-flow-col gap-3 items-center">
        <input  
        type="checkbox" name="securityaccept" id="securityaccept" class="accent-orange-600 scale-[1.25]" required>
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand and accept that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
    <div @click.prevent="openCloudWidget" class="flex border rounded-lg h-10 items-center justify-between hover:border-orange-500 focus:border-orange-500" tabindex="0" role="button" v-on:keyup.enter="openCloudWidget">
      <span class="px-2 text-stone-400">Optional - Image Upload</span>
      <div class="bg-orange-500 rounded-r-lg text-white h-full w-10 flex justify-center items-center text-lg"><i class="fal fa-cloud-upload"></i></div>
    </div>

    <div class="flex flex-col relative my-4 pt-1">
      <textarea 
      name="message" id="message" cols="30" rows="3" class="border p-2 peer" v-model="message"></textarea>
      <label for="message" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-400" :class="{'top-2': !form.message}">Message</label>
    </div>

    <button @click.prevent="validate()" class="mt-4 bg-orange-500 shadow-lg shadow-orange-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-orange-400">SUBMIT FOR APPROVAL</button>

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
        uid: Date.now(),

        conditions: [
          'As New', 'Excellent', 'Above Average', 'Good', 'Fair', 'Poor', 'Unroadworthy'
        ],
        transmissions: [
          'Automatic', 'Manual', 'Sequential'
        ],
        fuel: [
          'Petrol', 'Diesel', 'Hybrid', 'Electric'
        ],
        vtypes: [
          'Sedan 4-door', 'Coupe 2-door', 'Wagon', 'Hatch 5-door', 'Hatch 3-door', 'SUV', '4WD', 'Single Cab Ute', 'Dual Cab Ute', 'Van', 'Truck', 'Other'
        ],
        years: [
          "'22", "'21", "'20", "'19", "'18", "'17", "'16", "'15", "'14", "'13", "'12", "'11", "'10", "'09", "'08", "'07", "'06", "'05", "'04", "'03", "'02", "'01", "'00", "'99", "'98", "'97", "'96", "'95", "'94", "'93", "'92", "'91", "'90", "'89", "'88", "'87", "'86", "'85", "'84", "'83", "'82", "'81", "'80", "'79", "'78", "'77", "'76", "'75", "'74", "'73", "'72", "'71", "'70", "'69", "'68", "'67", "'66", "'65", "'64", "'63", "'62", "'61", "'60", "'59", "'58", "'57", "'56", "'55", "'54", "'53", "'52", "'51", "'50"
        ],
        form: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          postcode: "",
          dobD: "",
          dobM: "",
          dobY: "",
          licenseNo: "",
          expD: "",
          expM: "",
          expY: "",
          make: "",
          model: "",
          year: "",
          rego: "",
          kms: "",
          condition: "",
          transmission: "",
          fuel: "",
          vehicleType: "",
          amount: 10000,
          uploads: [],
          
        },
        uploadresults: [],
        message: "",
        errors:[]
      }
    },
    methods: {
      removeError(ref) {
        let index = this.errors.indexOf(ref)
        console.log(ref, index)
        if (index >= 0) {
          this.errors.splice(index, 1)
        }
        
      },
      isInvalid(ref) {
        if (this.errors.indexOf(ref) != -1) {
          return true
        } else {
          return false
        }
      },
      validate() {
        for (const [key, value] of Object.entries(this.form)) {
          console.log(key, value);
          
          if (!value) {
            if (this.errors.indexOf(key) > -1) return
            this.errors.push(key)
          }
        }
      },
      handleInput(e, ref){
        e.target.value=e.target.value.replace(/[^\d]/g,'');
        if (!ref) return
        this.nextInput(e, ref)   
      },
      nextInput(e, ref) {
        if (e.target.value.length == e.target.attributes["maxlength"].value) {
          this.$refs[ref].focus()
        } 
      },
      ofAge(date) {
        let year = new Date().getFullYear() - 18
        let month = new Date().getMonth()
        let day = new Date().getDate()
        let ofAgeDate = new Date(year, month, day)
        if (date < ofAgeDate) {
          return true
        } else {
          return false
        }     
      },
      openCloudWidget() {
        window.cloudinary.openUploadWidget({
            cloud_name: 'pawnhub',
            api_key: '359154961791498',
            upload_preset: 'oonqzby5',
            sources: ['camera', 'local'],
            default_source: 'local',
            multiple: true,
            folder: 'application_uploads/' + this.uid
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              let res = result.info
              this.form.uploads.push({
                "thumb": res.thumbnail_url,
                "url": res.secure_url
              })
            }
          })
      },
      sendmail() {
        var body = "a string";
        var requestOptions = {
          method: 'POST',
          body: body,
          redirect: 'follow'
        };
        fetch(
            import.meta.env.VITE_HOST + "/.netlify/functions/sendmail", requestOptions)
          .then(response => response.text())
          .then(result => {
            if (result == 'Ok') {
              // TODO display success message, close modal etc
              console.log('Submission Successful')
            }
          })
          .catch(error => {
            console.log('failed to submit: ', error)
          });
      }
    },
    computed: {
      dob() {
        let year = parseInt(this.form.dobY)
        let month = parseInt(this.form.dobM) - 1
        let day = parseInt(this.form.dobD)
        return new Date(year, month, day).toLocaleDateString()
      },
      licenseExpiry() {
        let year = parseInt(this.form.expY)
        let month = parseInt(this.form.expM) - 1
        let day = parseInt(this.form.expD)
        return new Date(year, month, day).toLocaleDateString()
      },
      isOfAge() {
       return this.ofAge(this.dob)
      }
    },
    watch: {
      'form.dobD': function(newVal) {
        if (newVal > 31) {
          this.form.dobD = 31
        }
        if (newVal == '00') {
          this.form.dobD = '01'
        }   
      },
      'form.dobM': function(newVal) {
        if (newVal > 12) {
          this.form.dobM = 12
        }
        if (newVal == '00') {
          this.form.dobM = '01'
        }   
      },
      'form.dobY': function(newVal) {
        if (newVal > 2022) {
          this.form.dobY = 2022
        }
        if ( newVal.length == 4 && parseInt(newVal) < 1900) {
          this.form.dobY = '1900'
        }   
      },
      'form.expD': function(newVal) {
        if (newVal > 31) {
          this.form.expD = 31
        }
        if (newVal == '00') {
          this.form.expD = '01'
        }   
      },
      'form.expM': function(newVal) {
        if (newVal > 12) {
          this.form.expM = 12
        }
        if (newVal == '00') {
          this.form.expM = '01'
        }   
      },
      'form.expY': function(newVal) {
        if ( newVal.length == 4 && parseInt(newVal) < 2000) {
          this.form.expY = '2000'
        }   
      }
    },
    
  }
</script>

<style scoped>
</style>