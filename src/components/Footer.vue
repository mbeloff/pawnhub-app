<template>
  <div class="bg-gradient-to-t from-black/50 to-zinc-900 text-zinc-400">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 py-10 gap-10">

      <div class="flex flex-col sm:flex-row col-span-1 md:col-span-2">
        <div class="flex flex-col text-sm md:gap-2 self-center sm/w-1/2 px-2 py-10 items-center gap-5 sm:py-0 sm:items-start">
          <router-link class="w-max" :to="{ name: 'Home' }">Home</router-link>
          <!-- <router-link class="w-max" :to="{ name: 'About' }">About</router-link> -->
          <router-link class="w-max" :to="{ name: 'Pawn' }">Pawn your Car</router-link>
          <router-link class="w-max" :to="{ name: 'Faq' }">FAQ</router-link>
          <router-link class="w-max" :to="{ name: 'Contact' }">Contact</router-link>
          <button class="w-max" @click="$vfm.show('form')" >Apply Online</button>
        </div>
        <div class="max-w-max mx-auto flex flex-col gap-3 px-2">
            <div class="grid gap-1 text-sm">
              <div class="flex">
                <i class="mr-2 mt-1 fal fa-map-marker fa-fw text-amber-500"></i>
                <div><p>{{common.address.street}}</p>
                <p>{{common.address.suburb}}</p>
                <p>{{common.address.state}} {{common.address.postcode}}</p></div>
              </div>              
              <p><i class="mr-2 fal fa-calendar fa-fw text-amber-500"></i>(By Appointment)</p>
            </div>
            <div class="grid gap-1">
              <p class="text-sm"><i class="mr-2 fal fa-phone-rotary fa-fw text-amber-500"></i>{{common.phoneLand}}</p>
              <p class="text-sm"><i class="mr-2 fal fa-mobile-android fa-fw text-amber-500"></i>{{common.phoneMobile}}</p>
              <p class="text-sm break-all"><i class="mr-2 fal fa-envelope fa-fw text-amber-500"></i>{{common.email}}</p>
            </div>
         </div>
      </div>
      <div class="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60949550.796982296!2d95.47468769797501!3d-21.189562525113576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sau!4v1641958830665!5m2!1sen!2sau" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
    <p class="text-center text-xs py-2 text-zinc-500">copyright 2022 &copy PawnHub </p>
  </div>
</template>

<script>
  import Common from '@/common.js'
  import IconStack from '@/components/IconStack.vue'
  export default {
    components: {
      IconStack
    },
    data() {
      return {
        common: Common
      }
    }
  }
</script>

<style>

</style>