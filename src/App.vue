<template>
  <div id="app">
    <TopBanner/>

    <div class="hero-wrapper py-16">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <Hero/>
    </div>

    <div class="gradient-background">
      <Search v-model="searchTerm" />
      <Pagination v-model="page" :items="snacks.length" :perPage="10"/>
        <SnackList :snacks="snacks"  />
      <Pagination v-model="page" :items="snacks.length" :perPage="10"/>
    </div>

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
  // using axios to make AJAX to a DB and set the response back from the server to snacks
  // mounted() {
  //   axios.get('/snacks').then(response => this.snacks = response.data);
  // },
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
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
} */

.stars, .twinkling {
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 15%;
  display: block;
}

@keyframes move-twink-back {
  from {background-position:0 0, 0 0, 0 0;}
  to {background-position:-10000px 0, 0 0, 0 ;}
}
@-webkit-keyframes move-twink-back {
  from {background-position:0 0, 0 0, 0 0;}
  to {background-position:-10000px 0, 0 0, 0 ;}
}
@-moz-keyframes move-twink-back {
  from {background-position:0 0, 0 0, 0 0;}
  to {background-position:-10000px 0, 0 0, 0 ;}
}
@-ms-keyframes move-twink-back {
  from {background-position:0 0, 0 0, 0 0;}
  to {background-position:-10000px 0, 0 0, 0 ;}
}

.hero-wrapper {
  background-image: url("./assets/images/twinklers2_4b.png"), url("./assets/images/stars4.png"), url("./assets/images/outrun-background.jpg");
  background-repeat: repeat-x, repeat-x, no-repeat;
  background-position: top center, top center;
  background-size: 100px, 100px, cover;
  -moz-animation:none, move-twink-back 200s ease-in-out infinite, none;
  -ms-animation:none, move-twink-back 200s ease-in-out infinite, none;
  -o-animation:none, move-twink-back 200s ease-in-out infinite, none;
  -webkit-animation:none, move-twink-back 200s ease-in-out infinite, none;
  animation:none, move-twink-back 200s ease-in-out infinite, none;
}
</style>
