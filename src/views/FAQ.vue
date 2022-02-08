<template>
<div class="container mx-auto py-20">
  <p class="text-2xl text-amber-500 p-2 mb-5 font-bold">Frequently asked questions <span class="text-zinc-300 font-light">about car pawnbroking</span></p>
  <div v-for="(item,i) in questions" :key="i" class="cursor-pointer">
    <div @click="toggle(i)" class="p-2 font-medium text-amber-500 flex items-center justify-between rounded-t-lg" :class="{ 'bg-gradient-to-tr from-amber-500 to-amber-300 text-zinc-900' : tabActive == i }">
    <span>{{ item.title }}</span>
      <i v-show="tabActive != i" class="fal fa-plus"></i>
      <i v-show="tabActive == i" class="fal fa-minus"></i>
    </div>
    <transition-expand>
      <div class="bg-zinc-800 text-zinc-300 rounded-b-lg"  :class="{ 'bg-opacity-0' : tabActive != i }"  v-show="tabActive == i">
        <p class="p-5 text-sm font-light rounded-b-lg">{{item.content}}</p>  
      </div>            
    </transition-expand>
  </div>
</div>
</template>

<script>
import TransitionExpand from '@/components/TransitionExpand.vue'
  export default {
    components: {TransitionExpand},
    methods: {
      toggle(tab) {
        if (tab == this.tabActive) {
          this.tabActive = null
        } else {
          this.tabActive = tab
        }
      }
    },
    data() {
      return {
        tabActive: null,
        questions: [
          {
            title: 'How quickly can I get a loan with PawnHub?',
            content: 'After appraisal of your vehicle, you can typically get a loan within 30 minutes'
          },
          {
            title: 'What is the loan term?',
            content: 'Our loan terms are typically between 30 and 90 days, with an interest payment of 20% each 30 day period, or part thereof.'
          },
          {
            title: 'How much can I borrow?',
            content: 'We will loan you 40% - 60% of the market value of you vehicle.'
          },
          {
            title: 'What is market value?',
            content: 'Market value is the amount of money you can expect to receive for the sale of your vehicle.'
          },
          {
            title: 'What type of vehicles does PawnHub accept?',
            content: 'We will accept most road vehicles, including cars, utes, SUV. Please note: we do not accept watercraft, such as boats and jet ski\'s.'
          },
          {
            title: 'What is a pawn loan?',
            content: 'Pawn loans are based on the value of an asset, which is held by the lender for the duration of the loan'
          },
          {
            title: 'What will it cost me?',
            content: 'By the end of your loan term, you will need to pay back to principal amount and a monthly interest payment of 20%. E.g. For a loan of $1,000 your interest payment would be $200 each 30 day period, or part thereof, up to a maximum of 90 days.'
          },
          {
            title: 'I have a bad credit rating, am I still have to get a loan?',
            content: 'Yes, we are still able to help you.'
          },
          {
            title: 'Do I need to show proof of income/employment?',
            content: 'No.'
          },
          {
            title: 'There is money owing on my vehicle, am I still able to borrow against it?',
            content: 'We prefer there to be no finance owing or at least minimal owing so it can be paid out from the principal amount borrowed.'
          },
          {
            title: 'How long is the loan term?',
            content: 'Our minimum loan term is 30 days, up to a maximum of 90 days. However, if you make your monthly interest payments on time, we may agree to an extension.'
          },
          {
            title: 'What happens if I\'m not able to pay back the loan?',
            content: 'We will keep your asset in lieu of your loan payments (including principal and any outstanding interest and fees). You will not be contacted by debt collectors and your credit score will not be affected.'
          }
        ]
      }
    }
  }
</script>

<style lang="postcss" scoped>

</style>