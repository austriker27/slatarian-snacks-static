<template>
  <div id="app" class="bg-yellow-lightest">
    <TopBanner/>
    <Hero/>
    <Search v-model="searchTerm" />
    <!-- <Pagination v-model="page" :items="snacks.length" :perPage="10"/> -->
      <SnackList :snacks="snacks"/>
    <!-- <Pagination v-model="page" :items="snacks.length" :perPage="10"/> -->
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Hero from './components/Hero';
import TopBanner from './components/TopBanner';
import Pagination from './components/Pagination';
import getArraySection from './utilities/get-array-section';
import SnackList from './components/SnackList';
import Search from './components/Search';
import { snacks as snacksData } from './data';

export default {
  name: 'App',
  components: {
    Hero,
    TopBanner,
    Pagination,
    SnackList,
    Search,
  },
  data: () => ({
    searchTerm: '',
    snacks: [],
    page: 1,
  }),
  computed: {
    pageOfSnacks() {
      return getArraySection(this.snacks, this.page, 10);
    },
  },
  watch: {
    searchTerm() {
      this.filterSnacks();
    },
  },
  methods: {
    filterSnacks() {
      const searchTerm = this.searchTerm.toLowerCase();
      let result = snacksData;

      if (searchTerm) {
        result = result.filter(snack => {
          return (
            snack.title.toLowerCase().search(searchTerm) >= 0 ||
            snack.description.toLowerCase().search(searchTerm) >= 0
          );
        });
      }

      this.snacks = result;
      this.page = 1;
    },
  },
  created() {
    this.filterSnacks();
  },
};
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
}
</style>
