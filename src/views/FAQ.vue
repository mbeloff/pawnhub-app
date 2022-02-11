<template>
  <div class="bg-gradient-to-t from-zinc-900 to-zinc-800">
    <div class="container mx-auto py-20 px-2">
      <p class="text-2xl text-amber-500 p-2 mb-5 font-bold">Frequently asked questions <span class="text-zinc-300 font-light">about car pawnbroking</span></p>
      <div tabindex="1" @keypress="handler($event, i)" v-for="(item,i) in questions" :key="i" class="cursor-pointer rounded-lg " :class="{ ' shadow-lg ' : tabActive == i }">
        <div @click="toggle(i)" class="p-2 font-medium text-amber-500 flex items-center justify-between rounded-t-lg" :class="{ 'bg-gradient-to-tr from-amber-500/90 to-amber-300/90 text-inherit' : tabActive == i }">
          <span>{{ item.title }}</span>
          <i v-show="tabActive != i" class="fal fa-plus"></i>
          <i v-show="tabActive == i" class="fal fa-minus"></i>
        </div>
        <transition-expand>
          <div class="bg-zinc-800 text-zinc-300 rounded-b-lg" :class="{ 'bg-opacity-0' : tabActive != i }" v-show="tabActive == i">
            <p class="py-5 px-2 text-sm font-light rounded-b-lg">{{item.content}}</p>
          </div>
        </transition-expand>
      </div>

    </div>
    <div class="bg-zinc-900">
<div class="bg-black/20 py-10 text-center gap-5 flex flex-col border-b-4 border-t-4 border-amber-500/80 text-zinc-300 mb-20 px-2">
      <p class="text-lg">Whatever your situation, we're here to help with <em>fast,</em> no-fuss cash loans</p>
      <p class="text-2xl">Interested? Get in touch today!</p>
      <div class="flex flex-col md:flex-row mx-auto gap-2 container max-w-2xl items-center">
        <a :href="`tel:${common.phoneLand.replaceAll(' ','')}`" class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase">{{common.phoneLand}}</a>
        <router-link :to="{name: 'Contact'}" class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase">Message Us Online</router-link>
        <button class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase" @click="$vfm.show('form')">Get a Quote</button>
      </div>
    </div>
    </div>
    
  </div>

</template>

<script>
  import TransitionExpand from '@/components/TransitionExpand.vue'
  import common from '@/common.js'
  export default {
    components: {
      TransitionExpand
    },
    methods: {
      toggle(tab) {
        if (tab == this.tabActive) {
          this.tabActive = null
        } else {
          this.tabActive = tab
        }
      },
      handler(e, i) {
        if (e.code == 'Space' || 'Enter') {
          e.preventDefault()
          this.toggle(i)
        }
      }
    },
    data() {
      return {
        common: common,
        tabActive: null,
        questions: [{
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
            title: 'I have a bad credit rating, am I still able to get a loan?',
            content: 'Yes, we are still able to help you.'
          },
          {
            title: 'Do I need to show proof of income/employment?',
            content: 'No.'
          },
          {
            title: 'There is money owing on my vehicle, am I still able to borrow against it?',
            content: 'Your vehicle must be free from finance or any amounts owing to a financial institution.'
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