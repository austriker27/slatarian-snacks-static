<!-- <template v-for="snack in snacks" id="v-for-snacks"> -->
<template>
  <div class="">
    <div class="leading-normal shadow-lg bg-indigo2 rounded flex flex-col sm:flex-row md:w-3/4 snack-item">
      <!-- <div class="h-48 w-48 flex-none bg-cover rounded-t text-center" style="background-image: url('https://nuts.com/images/auto/801x534/assets/8ba593eb1bec237d.jpg')" title="Gummy Bears">
      </div> -->
      <img class="h-32 w-32 rounded-full mx-auto p-4" src="https://nuts.com/images/auto/801x534/assets/8ba593eb1bec237d.jpg" alt="Gummy Bears">
      <div></div>
      <div class="flex flex-col p-4">
        <div class="text-indigo8 font-bold font-NoeTextbook text-xl uppercase">{{ item.title }}</div>
        <span class="text-indigo8 text-sm font-aktiv meta-bit"> {{ item.dateAdded }}</span>
        <p class="text-indigo5 text-sm font-aktiv">{{ item.description }}</p>
        <div class="m-2 flex flex-wrap justify-start">
          <CategoryLabel class="category-label ml-2" v-for="category in item.category" :category="category" :key="category" />

        </div>
      </div>
      <div class="w-1/3 flex flex-col items-center content-center self-center align-middle p-4">
        <div class="">
          <a v-on:click="counter += 1" id="vote-counter" class="text-outrun-green hover:text-green-dark">
            <svg class="h-12 w-12 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>
          </a>
          <p class="text-indigo5 font-bold text-sm font-aktiv">
            {{ counter }} votes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryLabel from './CategoryLabel';

const parser = document.createElement('a');

export default {
  name: 'snack',
  props: ['item'],
  components: { CategoryLabel },
  methods: {
    // eslint-disable-next-line
    domainOf: url => ((parser.href = url), parser.hostname.replace(/www\./, '')),
  },
};
</script>

var voteCounter = new Vue({
  el: '#vote-counter',
  data: {
    counter: 0
  }
})

<style scoped>
.snack-item {
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}


.snack-item:hover {
  box-shadow: 10px 20px 30px 0 rgba(9,184,124,0.33),
              10px 20px 15px 0 rgba(9,184,124,0.24),
              -10px -20px 30px 0 rgba(9,184,124,0.33),
              -10px -20px 15px 0 rgba(9,184,124,0.24);
}

</style>