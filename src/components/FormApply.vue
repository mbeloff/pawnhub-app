<template>
  <form ref="appForm" class="grid gap-5 relative px-3 bg-zinc-800">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6 pt-10">
      <span class="col-span-full text-sm uppercase text-amber-500/80 text-left font-bold">Personal Details</span>
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
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-6">
      <span class="col-span-full text-sm mt-4 uppercase text-amber-500/80 font-bold">Vehicle Details</span>
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
          <option v-for="index in 70" :key="index">{{ new Date().getFullYear() - index + 1}}</option>
          <option>other</option>          
        </select>
        <label for="year" class="my-label" :class="{'label-initial' : !form.year}">Year</label>
      </div>
      <div class="relative">
        <input ref="rego" id="rego" name="rego" type="text" maxlength="10" v-model="form.rego" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('rego') }" placeholder=" " @input="removeError('rego')" />
        <label for="rego" class="my-label">Rego #</label>
      </div>
      <div class="relative">
        <input ref="kms" id="kms" name="kms" type="number" v-model="form.kms" class="my-input w-full peer" :class="{ 'invalid' : isInvalid('kms') }" placeholder=" " @input="removeError('kms')" />
        <label for="kms" class="my-label">Odometre (km's)</label>
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
    </div>
    <div class="w-full flex flex-col relative my-4 mt-10">
      <input class="accent-amber-500 peer" type="range" name="amount" id="amount" min="1000" max="100000" step="1000" v-model.number="form.amount">
      <label for="amount" class="px-1 pointer-events-none absolute left-0 -top-8 text-zinc-300 font-light text-sm transition-all peer-focus:text-amber-400 peer-hover:text-amber-400 w-full flex justify-between items-center">Requested Loan Amount: <span class="text-base text-amber-500 font-bold">${{form.amount.toLocaleString()}}</span></label>
    </div>
    <div class="flex flex-col gap-2 text-zinc-300">
      <label for="accept1" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500  rounded' : isInvalid('accept1')}">
        <input type="checkbox" name="accept1" id="accept1" class="accent-amber-500 scale-[1.5]" v-model="form.accept1" @change="removeError('accept1')">
        <span class="text-sm italic tracking-tight leading-tight font-light">My vehicle is unencumbered, registered and in a roadworthy condition</span>
      </label>
      <label for="accept2" class="flex gap-3 items-center p-1" :class="{ 'text-red-500 border border-red-500 rounded' : isInvalid('accept2')}">
        <input type="checkbox" name="accept2" id="accept2" class="accent-amber-500 scale-[1.5]" v-model="form.accept2" @change="removeError('accept2')">
        <span class="text-sm italic tracking-tight leading-tight font-light">I understand and accept that my vehicle will be held by PawnHub as security for the term of the loan</span>
      </label>
    </div>
    <label for="cloudbutton" class="overflow-hidden flex flex-col rounded border hover:border-amber-400 bg-zinc-100 border-zinc-900">
      <button id="cloudbutton" @click.prevent="openCloudWidget" class="flex border-zinc-900 h-10 items-center justify-between hover:border-amber-400 focus:border-amber-400 group" tabindex="0" role="button" v-on:keyup.enter="openCloudWidget">
      <span class="px-2 text-zinc-500 group-hover:text-zinc-700 ">Optional - Image Upload</span>
      <div class="bg-amber-500 group-hover:bg-amber-400 border-amber-600 text-white h-full w-10 flex  group-hover:border-amber-500 justify-center items-center text-lg"><i class="fal fa-cloud-upload"></i></div>
    </button>    
    </label>
    <p class="text-sm italic text-zinc-800 font-light p-1 -mt-5">You can use the button above to upload photos of your vehicle, proof of ownership and/or ID documents.</p>
    <div class="flex flex-col relative my-4 pt-1">
      <textarea name="message" id="message" cols="30" rows="3" class="border p-2 peer rounded-sm border-b-4 border-amber-300" v-model="message" placeholder=" "></textarea>
      <label for="message" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-amber-400" :class="{'top-2': !message}">Message</label>
    </div>
    <p v-show="errors.length" class="text-red-500 italic font-serif text-sm">*Please complete all required information</p>
    <button @click.prevent="validate()" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 mb-5 transition duration-500 hover:-translate-y-1 ease-out text-white hover:bg-amber-400" :class="{ 'pointer-events-none opacity-50' : loading }">SUBMIT FOR APPROVAL</button>

  </form>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        uid: Date.now(),
        conditions: [
          'As New', 'Excellent', 'Above Average', 'Good', 'Fair', 'Poor', 'Unroadworthy'
        ],
        transmissions: [
          'Automatic', 'Manual', 'Sequential'
        ],
        form: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          postcode: "",
          make: "",
          model: "",
          year: "",
          rego: "",
          kms: "",
          condition: "",
          transmission: "",
          amount: 20000,
          accept1: false,
          accept2: false,
        },
        uploads: [],
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
        this.loading = true
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify(this.emailBody),
          redirect: 'follow'
        };
        fetch(
            import.meta.env.VITE_HOST + "/.netlify/functions/emailapplication", requestOptions)
          .then(response =>{
            this.loading = false
            if(response.ok){return response.text()}
            throw new Error(response.statusText)
          })
          .then(result => {
            if (result == 'Ok') {              
              this.$vfm.show('dialog-confirmation')
              console.log('Submission Successful')
            }
          })
          .catch(error => {
            this.$vfm.show('dialog-error')
            console.log('failed to submit: ', error)
          });
      },
    },
    computed: {
      emailBody() {
        let json = {
          requestedAmount: '$' + this.form.amount.toLocaleString(),
          name: this.form.firstName + ' ' + this.form.lastName,
          phone: this.form.phone,
          email: this.form.email,
          address: this.form.address + ', ' + this.form.postcode,
          vehicle: this.form.year + ' ' + this.form.make + ' ' + this.form.model,
          rego: this.form.rego,
          mileage: this.form.kms,
          transmission: this.form.transmission,
          message: this.message,
          uploads: this.uploads
        }
        return json
      }
    },
  }
</script>

<style lang="postcss">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .my-input {
    @apply h-8 border-b-4 border-t-0 rounded-sm border-l-0 border-r-0 text-zinc-900 bg-zinc-100 px-1 border-amber-500/50
  }

  .my-input:focus {
    @apply border-amber-500 outline-none ring-transparent
  }

  .my-input.invalid {
    @apply border-b-4 border-red-500
  }

  .my-label {
    @apply px-1 pointer-events-none absolute left-0 -top-4 text-zinc-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber-400 peer-focus:text-xs
  }

  .my-label.label-initial {
    @apply text-zinc-500 top-2 text-sm peer-focus:text-xs
  }
</style>