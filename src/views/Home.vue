<template>
  <div>
    <div class="bg-1 bg-cover bg-center  py-20">
      <div class="container mx-auto lg:flex-col lg:items-center px-4 lg:justify-between gap-10 relative py-5 overflow-x-hidden">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-200 sm:text-4xl sm:leading-10 z-20">
          Need Cash Fast?
          <br />
          <div class="bg-black/50 pr-5">
            <span class="text-amber-300 text-3xl">Quick and easy cash loans against your vehicle. <br>No credit checks. No proof of income.</span>  
          </div>                 
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 z-2 ">
          <button @click="$vfm.show('form')" class="inline-flex items-center justify-center px-5 py-3 text-lg font-medium leading-6 border border-transparent focus:outline-none uppercase bg-amber-500 shadow-lg shadow-amber-500/30  transition duration-500 hover:-translate-y-1 ease-out text-white hover:bg-amber-400">Apply Online</button>
        </div>
      </div>
    </div>

    <div class="bg-stone-800">
      <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row container mx-auto items-center py-20 gap-10 px-4">
        <div class="text-stone-100 flex flex-col gap-3 lg:w-4/5 ml-auto">
          <h1 class="text-amber-500 font-medium text-4xl mb-0">
            Get the money you need <span class="italic font-bold">today</span>
          </h1>
          <p><i class="fal fa-check-circle mr-2 text-amber-500"></i>Waiting on a payment but need cash now for wages, materials or other expenses?</p>
          <p><i class="fal fa-check-circle mr-2 text-amber-500"></i>Won a contract and need to purchase materials or hire more staff?</p>
          <p><i class="fal fa-check-circle mr-2 text-amber-500"></i>Waiting on a commission payment but have bills to pay?</p>
          <p><i class="fal fa-check-circle mr-2 text-amber-500"></i>Expecting a tax return but need cash now?</p>
          <p><i class="fal fa-check-circle mr-2 text-amber-500"></i>Don't want to sell any assets, but need to pay overdue invoices?</p>
          <p class="mt-10 max-w-prose">No matter the reason, we'll lend you money against any registered and unencumbered vehicle of value. With your car held securely by us for the duration of the loan.</p>
        </div>
        <div class="w-full lg:w-4/5 lg:py-10 h-full mr-auto">
          <img class="object-cover w-full h-full" src="https://res.cloudinary.com/dg5ybbkbh/image/upload/v1641957716/ph/hundreds.webp" alt="">
        </div>
      </div>

    </div>

    <div class="svg-back relative border-t-4 border-amber-500">
      <div class="absolute w-full h-full bg-stone-900/80"></div>
      <div class="content-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="card in cards" :key="card.title" class="backdrop-blur-sm bg-black/20 rounded-lg flex items-center flex-col text-stone-100 py-2">
          <icon-stack :icon="card.icon"></icon-stack>
          <div class="px-4 text-center">
            <h3 class="text-amber-500 font-bold text-lg mb-2">{{card.title}}</h3>
            <p class="text-left py-4">{{card.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black text-white py-10 text-center gap-5 flex flex-col border-b-4 border-t-4 border-amber-500">
      <p class="text-lg">Whatever your situation, we're here to help with <em>fast,</em> no-fuss cash loans</p>
      <p class="text-2xl">Interested? Get in touch today!</p>
      <div class="flex flex-col md:flex-row mx-auto gap-2 container max-w-2xl items-center">
        <button class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase">1800 123 456</button>
        <button class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase">Message Us Online</button>
        <button class="py-2 w-52 flex-1 px-6 hover:bg-amber-400 bg-amber-500 text-black uppercase" @click="$vfm.show('form')">Get a Quote</button>
      </div>
    </div>
  </div>
  <div class="bg-stone-900">
    <div class="container mx-auto py-20 px-2 flex flex-col gap-4">
      <p class="text-amber-500 font-medium text-4xl mb-10">Getting a cash loan with PawnHub couldn't be easier</p>
      <div class="flex">
        <p class="text-8xl text-amber-300 mr-3 w-20 flex-none">1</p>
        <div>
          <p class="text-amber-200 text-xl font-bold">Get a quote</p>
         <p class="text-white">Let us know about your vehicle and we'll give you a quick quote and pre-approval.</p>
        </div>     
      </div>
      <div class="flex">
        <p class="text-8xl text-amber-300 mr-3 w-20 flex-none">2</p>
        <div>
          <p class="text-amber-200 text-xl font-bold">Drop in</p>
         <p class="text-white">Bring in your vehicle, along with 2 forms of ID (Including 1 photo ID).</p>
        </div>     
      </div>
      <div class="flex">
        <p class="text-8xl text-amber-300 mr-3 w-20 flex-none">3</p>
        <div>
          <p class="text-amber-200 text-xl font-bold">Get cash</p>
         <p class="text-white">Get cash on the spot once your loan is approved.</p>
        </div>     
      </div>
      <div class="flex">
        <p class="text-8xl text-amber-300 mr-3 w-20 flex-none">4</p>
        <div>
          <p class="text-amber-200 text-xl font-bold">Flexible payment options</p>
         <p class="text-white">We make it easy to make your loan repayments - pay via phone, in-store or online.</p>
        </div>     
      </div>      
    </div>
  </div>
  <div class="h-screen bg-stone-900"></div>
</template>

<script>
  import IconStack from '@/components/IconStack.vue'
  export default {
    components: {
      IconStack
    },
    data() {
      return {
        cards: [{
            title: "Fast Approval",
            text: "Get a hassle-free loan against your vehicle today.",
            icon: "check-circle"
          },
          {
            title: "No Credit Checks",
            text: "Get a loan regardless of your credit history. No application fees or proof of income required.",
            icon: "search-dollar"
          },
          {
            title: "Great Deals",
            text: "Negotiate the best loan to value ratio. Borrow up to 60% of your vehicle's value.",
            icon: "comments-alt-dollar"
          },
          {
            title: "No Worries",
            text: "Your vehicle is securely held by us for the duration of the loan period.",
            icon: "shield-check"
          }
        ]
      }
    },
  }
</script>

<style lang="postcss">
  .content-box {
    @apply container px-4 py-20 mx-auto
  }

  .bg-1 {
    background-image: url(https://res.cloudinary.com/pawnhub/image/upload/v1642638013/assets/ph_bg1.jpg)
  }

  .svg-back {
    background-color: #080808;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23080808' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cuse fill='%23242424' href='%23s' y='2'/%3E%3Cuse fill='%23242424' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23333333' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23333333' href='%23s'/%3E%3Cuse fill='%233e3e3e' href='%23s' x='2'/%3E%3Cuse fill='%233e3e3e' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23484848'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23484848'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23515151'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23FFA500'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23585858'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }

  .car-bg {
    background-image: url(https://res.cloudinary.com/dg5ybbkbh/image/upload/c_crop,g_north,h_279,w_1000/v1641966858/ph/vehicle_outline.png);
  }
</style>