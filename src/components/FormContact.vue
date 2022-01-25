<template>
  <form>
    <div class="grid grid-cols-2 gap-4 gap-y-6 max-w-lg mx-auto py-10 bg-zinc-800 px-6 rounded border border-zinc-700">
      <div class="col-span-2 mb-4">
        <p class="text-2xl font-bold text-amber-500 ">Contact Us</p>
        <p class=" text-lg text-zinc-300">We're available to answer all of your questions.</p>
      </div>

      <div class="relative col-span-2">
        <input ref="name" id="name" name="name" type="text" v-model="name" class="my-input w-full peer" placeholder=" " />
        <label for="name" class="my-label">First Name</label>
      </div>
      <div class="relative">
        <input ref="email" id="email" name="email" type="email" v-model="email" class="my-input w-full peer" placeholder=" " />
        <label for="email" class="my-label">Email</label>
      </div>
      <div class="relative">
        <input ref="phone" id="phone" name="phone" type="tel" v-model="phone" class="my-input w-full peer" placeholder=" " />
        <label for="phone" class="my-label">Phone</label>
      </div>

      <fieldset class="col-span-2 grid grid-cols-2 gap-4">
        <legend class="text-zinc-300 text-sm">Preferred contact method</legend>
        <label for="cPhone" class="text-zinc-300 text-sm my-2">
          <input type="radio" class="accent-amber-400 scale-[1.5] mr-2" id="cPhone" v-model="preferredContact" value="Contact me by phone">
          Phone
        </label>
        <label for="cEmail" class="text-zinc-300 text-sm my-2">
          <input type="radio" class="accent-amber-400 scale-[1.5] mr-2" id="cEmail" v-model="preferredContact" value="Contact me by email">
          Email
        </label>

      </fieldset>

      <div class="flex flex-col relative my-4 pt-1 col-span-2">
        <textarea name="message" id="message" cols="30" rows="3" class="border p-2 peer" v-model="message" placeholder=" "></textarea>
        <label for="message" class="px-1 pointer-events-none absolute left-0 -top-3.5 text-amber-200 text-xs transition-all peer-placeholder-shown:text-sm font-medium peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-amber-600" :class="{'top-2': !message}">Message</label>
      </div>
      <button @click.prevent="validate()" class="bg-amber-500 shadow-lg shadow-amber-500/30 py-2 transition duration-500 hover:-translate-y-1 ease-out text-white hover:bg-amber-400">SUBMIT</button>
    </div>

  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredContact: "",
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .my-label {
    @apply text-amber-200
  }
</style>