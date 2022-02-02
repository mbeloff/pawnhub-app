<template>
  <label class="!border rounded flex items-center p-2 border-zinc-600 text-zinc-300 text-sm" for="recaptcha">
    <input id="recaptcha" name="recaptcha" type="checkbox" class="accent-amber-400 scale-[1.25]" @click.prevent="recaptcha" v-model="state.success">
    <span class="ml-2">I'm not a robot</span>
    <i v-show="state.checking && !state.success" class="far fa-circle-notch ml-2 opacity-80 fa-spin"></i>
    <span v-show="state.success == false && !state.checking" class="text-red-500 ml-2">error</span>
  </label> 
</template>

<script>
import { useReCaptcha } from 'vue-recaptcha-v3'
import { reactive } from 'vue'
export default {
  setup(props, context)  {
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
    const state = reactive({
    success: null,
    checking: false,
    })
    const recaptcha = async () => {
      state.checking = true
      await recaptchaLoaded()
      const token = await executeRecaptcha('submit')
      var requestOptions = {
          method: 'POST',
          body: token,
          redirect: 'follow'
        };

      fetch(import.meta.env.VITE_HOST + '/.netlify/functions/verifyrecap', requestOptions)
        .then(response => 
        response.text()
        )
        .then(result => {
          state.checking = false
        let res = JSON.parse(result)
        if (!res.success) {
          state.success = false
          throw new Error('recaptcha failed')
        } else {
          state.success = true
          context.emit('success')
        }
        }).catch(err => console.log(err))
    }

    return {
      recaptcha, state
    }
  },
}
</script>