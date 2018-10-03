<template>
  <div id="app">
    <TopBanner/>
    <Hero/>
    <!-- <SnackCard/> -->
    <SnackList />
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Hero from './components/Hero';
import TopBanner from './components/TopBanner';
// import SnackCard from './components/SnackCard';
import SnackList from './components/SnackList';
import { snacks as snackData } from './data';

export default {
  name: 'App',
  components: {
    Hero,
    TopBanner,
    // SnackCard,
    SnackList,
  },
  data: () => ({
    snacks: [],
  }),
  methods: {
    filterSnacks() {
      // STUB... will actually add filtering later
      this.snacks = snackData;
    },
  },
  created() {
    this.filterSnacks();
  },
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
}
</style>
