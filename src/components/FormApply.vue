<template>
  <form ref="appForm" class="grid gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
      <span class="col-span-full text-sm my-4 uppercase text-amber-500 text-center">Personal Details</span>
      <div class="relative">
        <input ref="firstName" id="firstName" name="firstName" type="text" v-model="form.firstName" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('firstName') }" placeholder=" " @input="removeError('firstName')" />
        <label for="firstName" class="my-label">First Name</label>
      </div>
      <div class="relative">
        <input ref="lastName" id="lastName" name="lastName" type="text" v-model="form.lastName" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('lastName') }" placeholder=" " @input="removeError('lastName')" />
        <label for="lastName" class="my-label">Last Name</label>
      </div>
      <div class="relative">
        <input ref="email" id="email" name="email" type="email" v-model="form.email" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('email') }" placeholder=" " @input="removeError('email')" />
        <label for="email" class="my-label">Email</label>
      </div>
      <div class="relative">
        <input ref="phone" id="phone" name="phone" type="tel" v-model="form.phone" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('phone') }" placeholder=" " @input="removeError('phone')" />
        <label for="phone" class="my-label">Phone</label>
      </div>
      <div class="relative">
        <input ref="address" id="address" name="address" type="text" v-model="form.address" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('address') }" placeholder=" " @input="removeError('address')" />
        <label for="address" class="my-label">Address</label>
      </div>
      <div class="relative">
        <input ref="postcode" id="postcode" name="postcode" type="text" v-model="form.postcode" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('postcode') }" placeholder=" " @input="removeError('postcode')" />
        <label for="postcode" class="my-label">Postal Code</label>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-8 mt-2">
      <div class="flex w-full relative text-stone-500 focus-within:text-amber-500">
        <input ref="dobD" id="dobD" @focus="$event.target.select()" maxlength="2" min="1" type="number" placeholder="DD" class="my-input w-[30%]" v-model.number="form.dobD" @input="handleInput($event,'dobM'), removeError('dobD')" :class="{ 'invalid' : isInvalid('dobD')}" autocomplete="bday-day">
        <span class="text-amber-500 opacity-50">/</span>
        <input ref="dobM" id="dobM" @focus="$event.target.select()" maxlength="2" type="number" min="1" placeholder="MM" class="my-input w-[30%]" v-model.number="form.dobM" @input="handleInput($event, 'dobY'), removeError('dobM')" :class="{ 'invalid' : isInvalid('dobM')}" autocomplete="bday-month">
        <span class="text-amber-500 opacity-50">/</span>
        <input ref="dobY" id="dobY" @focus="$event.target.select()" maxlength="4" min="1" max="9999" type="number" placeholder="YYYY" class="my-input w-[40%]" v-model.number="form.dobY" @input="handleInput($event, 'license'), removeError('dobY')" :class="{ 'invalid' : isInvalid('dobY')}" autocomplete="bday-year">
        <label class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">Date of Birth</label>
      </div>
      <div class="relative">
        <input ref="license" id="license" name="license" type="text" maxlength="14" v-model="form.license" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('license') }" placeholder=" " @input="removeError('license')" />
        <label for="license" class="my-label">License #</label>
      </div>
      <div class="flex w-full relative text-stone-500 focus-within:text-amber-500">
        <input ref="expD" id="expD" @focus="$event.target.select()" maxlength="2" type="number" placeholder="DD" class="my-input w-[30%]" v-model.number="form.expD" @input="handleInput($event,'expM'), removeError('expD')" :class="{ 'invalid' : isInvalid('expD')}" autocomplete="off">
        <span class="text-amber-500 opacity-50">/</span>
        <input ref="expM" id="expM" @focus="$event.target.select()" maxlength="2" type="number" placeholder="MM" class="my-input w-[30%]" v-model.number="form.expM" @input="handleInput($event, 'expY'), removeError('expM')" :class="{ 'invalid' : isInvalid('expD')}" autocomplete="off">
        <span class="text-amber-500 opacity-50">/</span>
        <input ref="expY" id="expY" @focus="$event.target.select()" maxlength="4" type="number" placeholder="YYYY" class="my-input w-[40%]" v-model.number="form.expY" @input="handleInput, removeError('expY')" :class="{ 'invalid' : isInvalid('expD')}" autocomplete="off">
        <label for="" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-xs transition-all w-full flex justify-between items-center">License Expiry</label>
      </div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-6">
      <span class="col-span-full text-sm my-4 uppercase text-amber-500 text-center">Vehicle Details</span>
      <div class="relative">
        <input ref="make" id="make" name="make" type="text" v-model="form.make" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('make') }" placeholder=" " @input="removeError('make')" />
        <label for="make" class="my-label">Vehicle Make</label>
      </div>
      <div class="relative">
        <input ref="model" id="model" name="model" type="text" v-model="form.model" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('model') }" placeholder=" " @input="removeError('model')" />
        <label for="model" class="my-label">Model</label>
      </div>
      <div class="relative">
        <select name="year" id="year" class="peer my-input w-full" v-model="form.year" @input="removeError('year')" :class="{ 'invalid' : isInvalid('year') }">
          <option v-for="option in years">{{option}}</option>
        </select>
        <label for="year" class="my-label" :class="{'label-initial' : !form.year}">Year</label>
      </div>
      <div class="relative">
        <input ref="rego" id="rego" name="rego" type="text" maxlength="10" v-model="form.rego" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('rego') }" placeholder=" " @input="removeError('rego')" />
        <label for="rego" class="my-label">Rego #</label>
      </div>
      <div class="relative">
        <input ref="kms" id="kms" name="kms" type="number" v-model="form.kms" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('kms') }" placeholder=" " @input="removeError('kms')" />
        <label for="kms" class="my-label">Km's</label>
      </div>
      <div class="relative">
        <select name="condition" id="condition" class="peer my-input w-full" v-model="form.condition" @input="removeError('condition')" :class="{ 'invalid' : isInvalid('condition') }">
          <option v-for="option in conditions">{{option}}</option>
        </select>
        <label for="condition" class="my-label" :class="{'label-initial' : !form.condition}">Condition</label>
      </div>
      <div class="relative">
        <select name="transmission" id="transmission" class="peer my-input w-full" v-model="form.transmission" @input="removeError('transmission')" :class="{ 'invalid' : isInvalid('transmission') }">
          <option v-for="option in transmissions">{{option}}</option>
        </select>
        <label for="transmission" class="my-label" :class="{'label-initial' : !form.transmission}">Transmission</label>
      </div>
      <div class="relative">
        <select name="fuel" id="fuel" class="peer my-input w-full" v-model="form.fuel" @input="removeError('fuel')" :class="{ 'invalid' : isInvalid('fuel') }">
          <option v-for="option in fuels">{{option}}</option>
        </select>
        <label for="fuel" class="my-label" :class="{'label-initial' : !form.fuel}">Fuel Type</label>
      </div>
      <div class="relative">
        <select name="vehicleType" id="vehicleType" class="peer my-input w-full" v-model="form.vehicleType" @input="removeError('vehicleType')" :class="{ 'invalid' : isInvalid('vehicleType') }">
          <option v-for="option in vtypes">{{option}}</option>
        </select>
        <label for="vehicleType" class="my-label" :class="{'label-initial' : !form.vehicleType}">Type of Vehicle</label>
      </div>
    </div>
    <div class="w-full flex flex-col relative my-4 mt-10">
      <input class="accent-amber-500 peer" type="range" name="amount" id="amount" min="5000" max="50000" step="2500" v-model.number="form.amount">
      <label for="amount" class="px-1 pointer-events-none absolute left-0 -top-8 text-stone-500 text-sm transition-all peer-focus:text-amber-400 peer-hover:text-amber-400 w-full flex justify-between items-center">Requested Loan Amount: <span class="text-base text-amber-500 font-bold">${{form.amount.toLocaleString()}}</span></label>
    </div>

    <div class="flex flex-col gap-2">
      <label for="accept1" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500  rounded' : isInvalid('accept1')}">

        <input type="checkbox" name="accept1" id="accept1" class="accent-amber-400 scale-[1.5]" v-model="form.accept1" @change="removeError('accept1')">

        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label for="accept2" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500 rounded' : isInvalid('accept2')}">
        <input type="checkbox" name="accept2" id="accept2" class="accent-amber-400 scale-[1.5]" v-model="form.accept2" @change="removeError('accept2')">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand and accept that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
    <div @click.prevent="openCloudWidget" class="flex border border-stone-400 bg-stone-100 rounded-lg h-10 items-center justify-between hover:border-amber-400 focus:border-amber-400 group" tabindex="0" role="button" v-on:keyup.enter="openCloudWidget">
      <span class="px-2 text-stone-500 group-hover:text-stone-700 ">Optional - Image Upload</span>
      <div class="bg-amber-500 group-hover:bg-amber-400 rounded-r-lg text-white h-full w-10 flex justify-center items-center text-lg"><i class="fal fa-cloud-upload"></i></div>
    </div>

    <div class="flex flex-col relative my-4 pt-1">
      <textarea name="message" id="message" cols="30" rows="3" class="border p-2 peer" v-model="message" placeholder=" "></textarea>
      <label for="message" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-amber-400" :class="{'top-2': !message}">Message</label>
    </div>
    <p v-show="errors.length" class="text-red-500 italic font-serif text-sm">*Please complete all required information</p>
    <button @click.prevent="validate()" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white hover:bg-amber-400">SUBMIT FOR APPROVAL</button>

  </form>
</template>

<script>
  export default {
    data() {
      return {
        uid: Date.now(),
        conditions: [
          'As New', 'Excellent', 'Above Average', 'Good', 'Fair', 'Poor', 'Unroadworthy'
        ],
        transmissions: [
          'Automatic', 'Manual', 'Sequential'
        ],
        fuels: [
          'Petrol', 'Diesel', 'Hybrid', 'Electric'
        ],
        vtypes: [
          'Sedan 4-door', 'Coupe 2-door', 'Wagon', 'Hatch 5-door', 'Hatch 3-door', 'SUV', '4WD', 'Single Cab Ute', 'Dual Cab Ute', 'Van', 'Truck', 'Other'
        ],
        years: [
          "'22", "'21", "'20", "'19", "'18", "'17", "'16", "'15", "'14", "'13", "'12", "'11", "'10", "'09", "'08", "'07", "'06", "'05", "'04", "'03", "'02", "'01", "'00", "'99", "'98", "'97", "'96", "'95", "'94", "'93", "'92", "'91", "'90", "'89", "'88", "'87", "'86", "'85", "'84", "'83", "'82", "'81", "'80", "'79", "'78", "'77", "'76", "'75", "'74", "'73", "'72", "'71", "'70", "'69", "'68", "'67", "'66", "'65", "'64", "'63", "'62", "'61", "'60", "'59", "'58", "'57", "'56", "'55", "'54", "'53", "'52", "'51", "'50"
        ],
        form: {
          firstName: "M",
          lastName: "Test",
          email: "mail@test.com",
          phone: "+61 123 8763",
          address: "22 Uajbai st",
          postcode: "5234",
          dobD: "18",
          dobM: "01",
          dobY: "1985",
          license: "0072341223",
          expD: "01",
          expM: "07",
          expY: "2024",
          make: "VW",
          model: "Golf GTI",
          year: "'19",
          rego: "123ABC",
          kms: "40000",
          condition: "Excellent",
          transmission: "Manual",
          fuel: "Petrol",
          vehicleType: "",
          amount: 20000,
          accept1: true,
          accept2: true,
        },
        uploads: [{
          "thumb": "https://res.cloudinary.com/pawnhub/image/upload/c_limit,h_60,w_90/v1642721051/application_uploads/1642721040240/kabxitiewhk8imhrg5ky.jpg",
          "url": "https://res.cloudinary.com/pawnhub/image/upload/v1642721051/application_uploads/1642721040240/kabxitiewhk8imhrg5ky.jpg"
        }],
        message: "tessst message",
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
          if (value == "" || value == false) {
            this.errors.push(key)
          }
        }

        if (this.errors.length) {
          let id = this.errors[0]
          document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });

          setTimeout(function () {
            document.getElementById(id).focus()
          }, 100);
          return
        }
        this.sendmail()
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

      openCloudWidget() {
        window.cloudinary.openUploadWidget({
            cloud_name: 'pawnhub',
            api_key: '359154961791498',
            upload_preset: 'oonqzby5',
            sources: ['camera', 'local'],
            default_source: 'local',
            multiple: true,
            folder: 'application_uploads/' + this.uid,
            styles: {
              palette: {
                window: "#2B2825",
                sourceBg: "#3E3B3B",
                windowBorder: "#90a0b3",
                tabIcon: "#FFA40A",
                inactiveTabIcon: "#AD9B86",
                menuIcons: "#FFA40A",
                link: "#FFD458",
                action: "#FF870A",
                inProgress: "#FFA40A",
                complete: "#1DA0D6",
                error: "#c43737",
                textDark: "#000000",
                textLight: "#FFFFFF"
              },
              fonts: {
                default: null,
                "'Poppins', sans-serif": {
                  url: "https://fonts.googleapis.com/css?family=Poppins",
                  active: true
                }
              }
            }
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              let res = result.info
              this.uploads.push({
                "thumb": res.thumbnail_url,
                "url": res.secure_url
              })
            }
          })
      },
      sendmail() {
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify(this.emailBody),
          redirect: 'follow'
        };
        fetch(
            import.meta.env.VITE_HOST + "/.netlify/functions/sendmail", requestOptions)
          .then(response => response.text())
          .then(result => {
            if (result == 'Ok') {
              this.$vfm.show('confirmation')
              console.log('Submission Successful')
            }
          })
          .catch(error => {

            // TODO error/retry dialog

            console.log('failed to submit: ', error)
          });
      },

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
        let date = new Date(year, month, day)
        if (date > new Date()) {
          return date.toLocaleDateString()
        } else {
          return date.toLocaleDateString() + ' (**expired)'
        }
      },
      dobString() {
        let year = new Date().getFullYear() - 18
        let month = new Date().getMonth()
        let day = new Date().getDate()
        let ofAgeDate = new Date(year, month, day)
        if (this.dob < ofAgeDate) {
          return this.dob.toLocaleDateString()
        } else {
          return this.dob.toLocaleDateString() + ' (**under 18)'
        }
      },
      emailBody() {
        let json = {
          requestedAmount: '$' + this.form.amount.toLocaleString(),
          name: this.form.firstName + ' ' + this.form.lastName,
          phone: this.form.phone,
          email: this.form.email,
          address: this.form.address + ', ' + this.form.postcode,
          dob: this.dobString,
          license: this.form.license,
          expiry: this.licenseExpiry,
          vehicle: this.form.year + ' ' + this.form.make + ' ' + this.form.model,
          vehicleType: this.form.vehicleType,
          rego: this.form.rego,
          mileage: this.form.kms,
          transmission: this.form.transmission,
          fuel: this.form.fuel,
          message: this.message,
          uploads: this.uploads
        }
        return json
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

  .my-input {
    @apply h-8 border-b-2 border-t-0 border-l-0 border-r-0 text-stone-900 px-1 border-amber-500/50
  }

  .my-input:focus {
    @apply border-amber-500 outline-none ring-transparent
  }

  .my-input.invalid {
    @apply border-b-4 border-red-500
  }

  .my-label {
    @apply px-1 pointer-events-none absolute left-0 -top-4 text-stone-500 text-xs transition-all peer-placeholder-shown:text-sm font-light peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber-600 peer-focus:text-xs
  }

  .my-label.label-initial {
    @apply text-stone-500 top-2 text-sm peer-focus:text-xs
  }
</style>