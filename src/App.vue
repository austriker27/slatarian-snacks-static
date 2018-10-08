<template>
  <div id="app">
    <TopBanner/>

    <div class="hero-wrapper py-16">
      <Hero/>

    </div>
    <div class="gradient-background stars twinkling clouds">
      <Search v-model="searchTerm" />
    <!-- <Pagination v-model="page" :items="snacks.length" :perPage="10"/> -->
      <SnackList :snacks="snacks"  />
    <!-- <Pagination v-model="page" :items="snacks.length" :perPage="10"/> -->

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

  
.stars, .twinkling, .clouds {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: block;
}

.stars {
  background: #000 url(./assets/images/stars.png) repeat top center;
  z-index: 0;
}

.twinkling {
  background:transparent url(./assets/images/twinkling.png) repeat top center;
  z-index: 1;
  -moz-animation:move-twink-back 200s linear infinite;
  -ms-animation:move-twink-back 200s linear infinite;
  -o-animation:move-twink-back 200s linear infinite;
  -webkit-animation:move-twink-back 200s linear infinite;
  animation:move-twink-back 200s linear infinite;
}
.clouds {
  width: 100%;
  height: 100%;
  background-size: cover;

  background:#20284f url(./assets/images/clouds-red-yellow.png) repeat top center;
  z-index: 3;
  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}

@keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
  from {background-position:0 0;}
  to {background-position:-10000px 5000px;}
}
@keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
  from {background-position:0 0;}
  to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
  from {background-position: 0;}
  to {background-position:10000px 0;}
}

.hero-wrapper {
  background-image: url("./assets/images/outrun-background.jpg");
  background-size: cover;
}
</style>
