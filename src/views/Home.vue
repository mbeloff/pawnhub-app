<template>
  <div class="min-h-screen bg-stone-900">
    <div
      class="py-16 lg:py-20 lg:flex lg:items-center lg:justify-between container px-4 mx-auto"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-200 sm:text-4xl sm:leading-10"
      >
        Need Cash Today?
        <br />
        <span class="text-indigo-600">Pawn your vehicle for quick and easy cash loans</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/about"
            class="inline-flex items-center justify-center px-5 py-3 text-xl font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
            >Apply Online</router-link
          >
        </div>
      </div>
    </div>
    <div class="svg-back relative">
      <div class="absolute w-full h-full bg-gradient-to-b from-stone-900 to-stone-900/0"></div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-5 container px-4 py-20 mx-auto">
      <div v-for="card in cards" :key="card.title" class="backdrop-blur-sm bg-black/20 rounded-lg flex items-center flex-col text-stone-100 py-2">
        <icon-stack :icon="card.icon"></icon-stack>
        <div class="px-4 text-center">
          <h3 class="text-amber-500 font-bold text-lg mb-2">{{card.title}}</h3>
          <p class="text-left">{{card.text}}</p>
        </div>        
      </div>
      
    </div>
    </div>
    
  </div>
  <div class="h-screen bg-stone-900"></div>
</template>

<script>
import IconStack from '@/components/IconStack.vue'
export default {
  components: {IconStack},
  data() {
    return {
      cards: [
        {
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
          text: "Negotiate the best loan to value ratio. Borrow up to 60% of your vehicles's market value.",
          icon: "comments-alt-dollar"
        },
        {
          title: "No Worries",
          text: "Your vehicle is securely held by us for the duration of the loan period.",
          icon: "shield-check"
        }
      ]
    }
  }
}
</script>

<style scoped>
.svg-back {
background-color: #080808;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23080808' stroke-width='0.7' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cuse fill='%23242424' href='%23s' y='2'/%3E%3Cuse fill='%23242424' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23333333' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23333333' href='%23s'/%3E%3Cuse fill='%233e3e3e' href='%23s' x='2'/%3E%3Cuse fill='%233e3e3e' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23484848'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23484848'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23515151'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23080808'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23585858'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(22.55) translate(-955.65 -716.74)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>

