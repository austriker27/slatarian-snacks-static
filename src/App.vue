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

export default {
  name: 'App',
  components: {
    Hero,
    TopBanner,
    SnackCard,
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
