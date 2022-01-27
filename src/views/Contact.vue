<template>
  <div class="py-20 bg-white h-full bg-gradient-to-t 
  from-zinc-900 to-zinc-800 relative">

    <div class="container mx-auto px-2">
        <contact-form class=""></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/FormContact.vue'
export default {
  components: {ContactForm},
  mounted() {
      window.scrollTo(0, 0)
    },
}
</script>

<style>
.pattern-1 {
  background-color: #ffffff;
  background-image:linear-gradient(to top, rgba(26, 24, 24, 0.856), rgba(151, 142, 142, 0.973)), url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.5' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")
}
</style>