<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
    >
      <slot></slot>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black/50 backdrop-blur-lg" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-lg py-6 px-5 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-medium leading-6 flex items-center justify-between text-gray-900"
              >
                Online Application

                <button
                  type="button"
                  class="inline-flex justify-center p-2 px-3 bg-orange-100 border border-transparent rounded-md hover:bg-orange-500 text-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  <i class="far fa-times"></i>
                </button>

              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Submit for approval and cash today.
                </p>
              </div>
                <form-apply></form-apply>              
              
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'
import FormApply from '@/components/FormApply.vue'
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    FormApply
  },

  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      closeModal() {
        isOpen.value = false
      },
      openModal() {       
        isOpen.value = true
      },
    }
  },

  watch: {
    'isOpen': function(val) {
      if (val == true) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
  },
}
</script>

<style>
</style>