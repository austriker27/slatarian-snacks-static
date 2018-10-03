<template>
  <div id="app">
    <TopBanner/>
    <Hero/>
    <SnackCard/>
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Hero from './components/Hero';
import TopBanner from './components/TopBanner';
import SnackCard from './components/SnackCard';
import { snacks as snackData } from '../data'

export default {
  name: 'App',
  components: {
    Hero,
    TopBanner,
    SnackCard,
  },
  data: () => ({
    snacks: []
    }),
    methods: {
      filterSnacks: function() {
        // STUB... will actually add filtering later
        this.snacks = snackData
      }
    },
    created: function() {
      this.filterSnacks()
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}
</style>
