<template>
  <form ref="appForm" class="grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
      <span class="col-span-full text-sm my-4 uppercase text-orange-500 text-center">Personal Details</span>
      <form-input ref="firstName" :name="'firstName'" :label="'First Name'" v-model="form.firstName" :invalid="isInvalid('firstName')" @input="removeError('firstName')">
      </form-input>
      <form-input ref="lastName" :name="'lastName'" :label="'Last Name'" v-model="form.lastName" :invalid="isInvalid('lastName')" @input="removeError('lastName')"></form-input>
      <form-input ref="email" :name="'email'" :label="'Email'" :type="'email'" :error="'Email address is invalid'" v-model="form.email" :invalid="isInvalid('email')" @input="removeError('email')"></form-input>
      <form-input ref="phone" :name="'phone'" :label="'Phone'" :type="'tel'" v-model="form.phone" :invalid="isInvalid('phone')" @input="removeError('phone')"></form-input>
      <form-input ref="address" :name="'address'" :label="'Street Address'" v-model="form.address" :invalid="isInvalid('address')" @input="removeError('address')"></form-input>
      <form-input ref="postcode" :name="'postcode'" :label="'Post Code'" v-model="form.postcode" :invalid="isInvalid('postcode')" @input="removeError('postcode')"></form-input>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-8 mt-2">
      <div class="flex w-full relative text-stone-500 focus-within:text-orange-500">
        <input ref="dobD" id="dobD" @focus="$event.target.select()" maxlength="2" min="1" type="number" placeholder="DD" class="date-input border-b-2 border-orange-500/50 w-[30%]" v-model.number="form.dobD" @input="handleInput($event,'dobM'), removeError('dobD')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobD')}" autocomplete="bday-day">
        <span class="text-orange-500 opacity-50">/</span>
        <input ref="dobM" id="dobM" @focus="$event.target.select()" maxlength="2" type="number" min="1" placeholder="MM" class="date-input border-b-2 border-orange-500/50 w-[30%]" v-model.number="form.dobM" @input="handleInput($event, 'dobY'), removeError('dobM')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobM')}" autocomplete="bday-month">
        <span class="text-orange-500 opacity-50">/</span>
        <input ref="dobY" id="dobY" @focus="$event.target.select()" maxlength="4" min="1" max="9999" type="number" placeholder="YYYY" class="date-input border-b-2 border-orange-500/50 w-[40%]" v-model.number="form.dobY" @input="handleInput($event, 'license'), removeError('dobY')" :class="{ 'border-red-500 border-b-4' : isInvalid('dobY')}" autocomplete="bday-year">
        <label class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">Date of Birth</label>
      </div>
      <form-input ref="license" maxlength="11" :name="'license'" :label="'License #'" v-model="form.license" :invalid="isInvalid('license')" @input="removeError('license')"></form-input>
      <div class="flex w-full relative text-stone-500 focus-within:text-orange-500">
        <input ref="expD" id="expD" @focus="$event.target.select()" maxlength="2" type="number" placeholder="DD" class="date-input border-b-2 border-orange-500/50 w-[30%]" v-model.number="form.expD" @input="handleInput($event,'expM'), removeError('expD')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}" autocomplete="off">
        <span class="text-orange-500 opacity-50">/</span>
        <input ref="expM" id="expM" @focus="$event.target.select()" maxlength="2" type="number" placeholder="MM" class="date-input border-b-2 border-orange-500/50 w-[30%]" v-model.number="form.expM" @input="handleInput($event, 'expY'), removeError('expM')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}" autocomplete="off">
        <span class="text-orange-500 opacity-50">/</span>
        <input ref="expY" id="expY" @focus="$event.target.select()" maxlength="4" type="number" placeholder="YYYY" class="date-input border-b-2 border-orange-500/50 w-[40%]" v-model.number="form.expY" @input="handleInput, removeError('expY')" :class="{ 'border-red-500 border-b-4' : isInvalid('expD')}" autocomplete="off">
        <label for="" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">License Expiry</label>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-6">
      <span class="col-span-full text-sm my-4 uppercase text-orange-500 text-center">Vehicle Details</span>
      <form-input ref="make" :name="'make'" :label="'Make'" v-model="form.make" :invalid="isInvalid('make')" @input="removeError('make')"></form-input>
      <form-input ref="model" :name="'model'" :label="'Model'" v-model="form.model" :invalid="isInvalid('model')" @input="removeError('model')"></form-input>
      <form-select ref="year" :name="'year'" :label="'Year'" :options="years" v-model="form.year" :invalid="isInvalid('year')" @input="removeError('year')"></form-select>
      <form-input ref="rego" :name="'rego'" :label="'Rego #'" v-model="form.rego" :invalid="isInvalid('rego')" @input="removeError('rego')"></form-input>
      <form-input ref="kms" :name="'kms'" :label="'Km\'s'" v-model="form.kms" :invalid="isInvalid('kms')" @input="removeError('kms')"></form-input>
      <form-select ref="condition" class="col-span-full sm:col-span-1" :name="'condition'" :label="'Condition'" :options="conditions" v-model="form.condition" :invalid="isInvalid('condition')" @input="removeError('condition')"></form-select>
      <form-select ref="transmission" :name="'transmission'" :label="'Transmission'" :options="transmissions" v-model="form.transmission" :invalid="isInvalid('transmission')" @input="removeError('transmission')"></form-select>
      <form-select ref="fuel" :name="'fuel'" :label="'Fuel Type'" :options="fuel" v-model="form.fuel" :invalid="isInvalid('fuel')" @input="removeError('fuel')"></form-select>
      <form-select ref="vehicleType" class="col-span-full sm:col-span-1" :name="'vehicleType'" :label="'Type of Vehicle'" :options="vtypes" v-model="form.vehicleType" :invalid="isInvalid('vehicleType')" @input="removeError('vehicleType')"></form-select>
    </div>
    <div class="w-full flex flex-col relative my-4 mt-10">
      <input class="accent-orange-500 peer" type="range" name="amount" id="amount" min="5000" max="50000" step="2500" v-model.number="form.amount">
      <label for="amount" class="px-1 pointer-events-none absolute left-0 -top-8 text-stone-500 text-sm transition-all peer-focus:text-orange-400 peer-hover:text-orange-400 w-full flex justify-between items-center">Requested Loan Amount: <span class="text-base text-orange-500 font-bold">${{form.amount.toLocaleString()}}</span></label>
    </div>

    <div class="flex flex-col gap-2">
      <label for="accept1" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500  rounded' : isInvalid('accept1')}">

        <input type="checkbox" name="accept1" id="accept1" class="accent-orange-600 scale-[1.5]" v-model="form.accept1" @change="removeError('accept1')">

        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label for="accept2" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500 rounded' : isInvalid('accept2')}">
        <input type="checkbox" name="accept2" id="accept2" class="accent-orange-600 scale-[1.5]" v-model="form.accept2" @change="removeError('accept2')">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand and accept that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
    <div @click.prevent="openCloudWidget" class="flex border rounded-lg h-10 items-center justify-between hover:border-orange-500 focus:border-orange-500 group" tabindex="0" role="button" v-on:keyup.enter="openCloudWidget">
      <span class="px-2 text-stone-500 group-hover:text-stone-700">Optional - Image Upload</span>
      <div class="bg-orange-500 rounded-r-lg text-white h-full w-10 flex justify-center items-center text-lg"><i class="fal fa-cloud-upload"></i></div>
    </div>

    <div class="flex flex-col relative my-4 pt-1">
      <textarea name="message" id="message" cols="30" rows="3" class="border p-2 peer" v-model="message"></textarea>
      <label for="message" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange-400" :class="{'top-2': !form.message}">Message</label>
    </div>
    <p v-show="errors.length" class="text-red-500 italic font-serif text-sm">*Please complete all required information</p>
    <button @click.prevent="validate()" class="bg-orange-500 shadow-lg shadow-orange-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white rounded hover:bg-orange-400">SUBMIT FOR APPROVAL</button>

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
          license: "",
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
          accept1: false,
          accept2: false,
        },
        uploadresults: [],
        message: "",
        errors: []
      }
    },
    mounted() {
      document.addEventListener('keydown', function (event) {
        if (event.keyCode === 13 && (event.target.nodeName === 'INPUT' || event.target.nodeName === 'SELECT')) {
          var form = event.target.form;
          var index = Array.prototype.indexOf.call(form, event.target);
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      });
    },
    methods: {
      removeError(ref) {
        let index = this.errors.indexOf(ref)
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
        this.errors = []
        for (let [key, value] of Object.entries(this.form)) {
          if (key != 'uploads' && (value == "" || value == false))
            this.errors.push(key)
        }

        if (this.errors.length) {
          let id = this.errors[0]
          document.getElementById(id).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});   
          
          setTimeout(function() {
              document.getElementById(id).focus()
          }, 100);
          return
        }
        // TODO submit form
        console.log('form completed')

      },
      handleInput(e, ref) {
        console.log('event target', e.target)
        e.target.value = e.target.value.replace(/[^\d]/g, '');
        if (!ref) return
        this.nextInput(e, ref)
      },
      nextInput(e, ref) {
        if (e.target.value.length == e.target.attributes["maxlength"].value) {
          document.getElementById(ref).focus()
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
        return new Date(year, month, day)
      },
      licenseExpiry() {
        let year = parseInt(this.form.expY)
        let month = parseInt(this.form.expM) - 1
        let day = parseInt(this.form.expD)
        return new Date(year, month, day)
      },
      isOfAge() {
        return this.ofAge(this.dob)
      }
    },

    watch: {
      'form.dobD': function (newVal) {
        if (newVal > 31) {
          this.form.dobD = 31
        }
        if (newVal == 0) {
          this.form.dobD = '01'
        }
      },
      'form.dobM': function (newVal) {

        if (newVal > 12) {
          this.form.dobM = 12
        }
        if (newVal == 0) {
          this.form.dobM = '01'
        }
      },
      'form.dobY': function (newVal) {
        if (newVal > 9999) {
          this.form.dobY = 2022
        }
        if (newVal == 0) {
          this.form.dobY = 1
        }
      },
      'form.expD': function (newVal) {

        if (newVal > 31) {
          this.form.expD = 31
        }
        if (newVal == 0) {
          this.form.expD = '01'
        }
      },
      'form.expM': function (newVal) {
        if (newVal > 12) {
          this.form.expM = 12
        }
        if (newVal == 0) {
          this.form.expM = '01'
        }
      },
      'form.expY': function (newVal) {
        if (newVal > 9999) {
          this.form.expY = 9999
        }
        if (newVal == 0) {
          this.form.expY = 1
        }
      },
    },

  }
</script>

<style lang="postcss" scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .date-input {
    @apply h-8 border-t-0 border-l-0 border-r-0 text-stone-900 px-1 text-center
  }

  .date-input:focus {
    @apply border-orange-500 outline-none ring-transparent
  }
</style>