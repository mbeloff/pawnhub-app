<template>
  <form @submit.prevent="submit()">
    <div class="grid grid-cols-2 gap-4 gap-y-6 max-w-lg mx-auto py-10 bg-zinc-800 px-6 rounded border border-zinc-700 relative">
      <div v-if="loading" class="absolute backdrop-blur-sm w-full h-full z-50 bg-zinc-800/70 grid items-center pointer-events-auto">
        <div class="w-full grid items-center text-amber-500">
          <i class="far fa-circle-notch text-center fa-spin fa-2x"></i>
        </div>
      </div>
      <div class="col-span-2 mb-4">
        <p class="text-2xl font-bold text-amber-500 ">Contact Us</p>
        <p class=" text-lg text-zinc-300">Please leave a message and we'll get back to you as soon as we can.</p>
      </div>
      <div class="relative col-span-2">
        <input ref="name" id="name" name="name" type="text" v-model="form.name" class="my-input w-full peer" placeholder=" " :class="{error: v$.form.name.$errors.length}" />
        <label for="name" class="my-label">Your Name</label>
      </div>
      <div class="relative">
        <input ref="email" id="email" name="email" type="text" v-model="form.email" class="my-input w-full peer" placeholder=" " :class="{error: v$.form.email.$errors.length}" />
        <label for="email" class="my-label">Email</label>
      </div>
      <div class="relative">
        <input ref="phone" id="phone" name="phone" type="tel" v-model="form.phone" class="my-input w-full peer" placeholder=" " :class="{error: v$.form.phone.$errors.length}" />
        <label for="phone" class="my-label">Phone</label>
      </div>
      <fieldset class="col-span-2 grid grid-cols-2 gap-4 focus-within:text-amber-600 text-zinc-300 border p-2 rounded border-transparent" :class="{error:v$.form.preferredContact.$errors.length}">
        <legend class=" text-xs text-amber-200">Preferred contact method</legend>
        <label for="cPhone" class="text-zinc-300 text-sm my-2">
          <input type="radio" class="accent-amber-400 scale-[1.5] mr-2 checked:before:absolute before:inset-0 before:z-[-10] before:w-full before:h-full before:rounded-full before:shadow-lg before:shadow-amber-500 before:bg-gradient-to-r before:from-lime-400 before:to-amber-500 focus:outline-none" id="cPhone" v-model="form.preferredContact" value="phone">
          Phone
        </label>
        <label for="cEmail" class="text-zinc-300 text-sm my-2">
          <input type="radio" class="accent-amber-400 scale-[1.5] mr-2 checked:before:absolute before:inset-0 before:z-[-10] before:w-full before:h-full before:rounded-full before:shadow-lg before:shadow-amber-500 before:bg-gradient-to-r before:from-lime-400 before:to-amber-500 focus:outline-none" id="cEmail" v-model="form.preferredContact" value="email">
          Email
        </label>
      </fieldset>
      <div class="flex flex-col relative mt-4 pt-1 col-span-2">
        <textarea ref="message" name="message" id="message" cols="30" rows="3" class=" border-b-4 border-amber-300 p-2 peer" v-model="form.message" placeholder=" " :class="{error: v$.form.message.$errors.length}"></textarea>
        <label for="message" class="px-1 pointer-events-none absolute left-0 -top-4 text-amber-200 text-xs transition-all peer-placeholder-shown:text-sm font-medium peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber-200 peer-focus:text-xs" :class="{'top-2': !form.message}">Message</label>
      </div>
      
      <recaptcha-check class="bg-zinc-700" :class="{error: v$.success.$errors.length}" @success="success = true"></recaptcha-check>
      <button type="submit" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white hover:bg-amber-400">SUBMIT</button>
      <div class="col-span-full text-xs text-zinc-400 italic -mt-4 opacity-70">
        This site is protected by reCAPTCHA and the Google
        <a class="text-blue-400" href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a class="text-blue-400" href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
    </div>
  </form>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import RecaptchaCheck from '@/components/RecaptchaCheck.vue'
  import {
    required,
    requiredIf,
    email
  } from '@vuelidate/validators'
  export default {
    setup() {
      return {
        v$: useVuelidate()
      }
    },
    components: {
      RecaptchaCheck
    },
    data() {
      return {
        loading: false,
        success: null,
        form: {
          name: "",
          phone: "",
          email: "",
          message: "",
          preferredContact: ""
        }

      }
    },
    validations() {
      return {
        success: {
          required
        },
        form: {
          name: {
            required
          },
          preferredContact: {
            required
          },
          phone: {
            required: requiredIf(this.form.preferredContact == 'phone'),
          },
          email: {
            required: requiredIf(this.form.preferredContact == 'email'),
            email
          },
          message: {
            required
          },
        }

      }
    },
    methods: {
      async submit() {
        const result = await this.v$.$validate()
        if (!result) {
          return
        }
        this.sendmail()
      },
      sendmail() {
        this.loading = true
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify(this.form),
          redirect: 'follow'
        };
        fetch(
            import.meta.env.VITE_HOST + "/.netlify/functions/emailcontact", requestOptions)
          .then(response => {
            this.loading = false
            if (response.ok) {
              return response.text()
            }
            throw new Error(response)
          })
          .then(result => {
            console.log(result)
            if (result == 'Ok') {
              this.form = {
                name: "",
                email: "",
                phone: "",
                message: "",
                preferredContact: "",
              }
              this.v$.$reset()
              this.$vfm.show('dialog-confirmation')
            }
          })
          .catch(error => {
            this.$vfm.show('dialog-error')
          });
      },
    }
  }
</script>

<style lang="postcss" scoped>
  .my-label {
    @apply text-amber-200 peer-focus:text-amber-200
  }

  .error {
    @apply border-b-4 border-red-500
  }

  fieldset.error {
    @apply border-red-500 border-b
  }
</style>