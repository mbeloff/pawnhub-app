<template>
  <div class="bg-zinc-800 text-zinc-300">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 py-4 gap-10">
      <div class="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60949550.796982296!2d95.47468769797501!3d-21.189562525113576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sau!4v1641958830665!5m2!1sen!2sau" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="flex items-center">
        <icon-stack :icon="'store-alt'" :bg="'text-black/30'" :size="'fa-3x'"></icon-stack>
        <p class="text-sm">123 street st, <br> Suburb <br>QLD 4000 <br>(By Appointment)</p>
      </div>
      <div class="flex items-center">
        <icon-stack :icon="'phone'" :bg="'text-black/30'" :size="'fa-3x'"></icon-stack>
        <div>
          <p class="text-sm">1800 123 456</p>
          <p class="text-sm">0400 123 456</p>
        </div>        
      </div>
    </div>
    <p class="text-center text-xs py-2">copyright 2022 &copy PawnHub </p>
  </div>
</template>

<script>
import IconStack from '@/components/IconStack.vue'
export default {
  components: {IconStack},
}
</script>

<style>

</style>