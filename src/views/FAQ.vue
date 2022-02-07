<template>
<div class="container mx-auto py-20">
  <p class="text-2xl text-amber-500 p-2 mb-5 font-bold">Frequently asked questions <span class="text-zinc-300 font-light">about car pawnbroking</span></p>
  <div v-for="(item,i) in questions" :key="i" class="bg-zinc-800">
    <div @click="toggle(i)" class="font-bold p-2 text-amber-500 flex items-center justify-between" :class="{ 'bg-amber-500 text-zinc-900' : tabActive == i }">
    <span>{{ item.title }}</span>
      <i v-show="tabActive != i" class="fal fa-plus"></i>
      <i v-show="tabActive == i" class="fal fa-minus"></i>
    </div>
    <transition-expand>
      <div  v-show="tabActive == i">
        <p class="px-2 py-2 text-zinc-300 border-t border-zinc-700 font-light">{{item.content}}</p>  
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
            content: 'After appraisal of your vehicle, you cantypically get a loan within 30 minutes'
          },
          {
            title: 'What is the loan term?',
            content: 'Our standard loan term is 3 months, with a possibility of extending'
          },
          {
            title: 'How much will PawnHub lend me?',
            content: 'We will loan you up to 60% of the market value of you vehicle.'
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
            content: 'Pawn loans are based on the value of an asset, which is to be held by the lender for the duration of the loan'
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
            title: ''
          }
        ]
      }
    }
  }
</script>

<style lang="postcss" scoped>

</style>