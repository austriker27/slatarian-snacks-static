<!-- <template v-for="snack in snacks" id="v-for-snacks"> -->
<template>
  <div class="">
    <div class="leading-normal shadow-lg bg-grey-lightest rounded flex">
      <!-- <div class="h-48 w-48 flex-none bg-cover rounded-t text-center" style="background-image: url('https://nuts.com/images/auto/801x534/assets/8ba593eb1bec237d.jpg')" title="Gummy Bears">
      </div> -->
      <img class="w-full" src="https://nuts.com/images/auto/801x534/assets/8ba593eb1bec237d.jpg" alt="Gummy Bears">
      <div></div>
      <div class="flex flex-col p-4">
        <div class="text-indigo-darker font-bold font-NoeDisplayBold text-xl uppercase">{{ item.title }}</div>
        <span class="meta-bit"> {{ item.dateAdded }}</span>
        <p class="text-indigo text-sm font-aktiv">{{ item.description }}</p>
        <div class="m-2 flex flex-wrap justify-start">
          <CategoryLabel class="category-label" v-for="category in item.category" :category="category" :key="category" />

        </div>
      </div>
      <div class="w-1/3 flex flex-col items-center content-center self-center align-middle p-4">
        <div class="">
          <a href="">
            <svg class="h-6 w-6 fill-current stroke-current text-indigo-darker inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/></svg>
          </a>
        </div>
        <div class="">
          <a href="">
            <svg class="h-6 w-6 fill-current stroke-current text-indigo-darker inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
old template:
<template>
  <div>
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p class="meta">
      Date Added
      <span class="meta-bit"> {{ item.dateAdded }}</span>
    </p>
    <p> {{ item.description }}</p>
    <p>
      <CategoryLabel class="category-label" v-for="category in item.category" :category="category" :key="category" />
    </p>
  </div>
</template>
-->

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
