<template>
  <div id="app">
    <TopBanner/>
    <Hero/>
    <!-- <SnackCard/> -->
    <SnackList :snacks="snacks"/>
  </div>
</template>

<script>
import '@/assets/styles/main.css';
import Hero from './components/Hero';
import TopBanner from './components/TopBanner';
// import SnackCard from './components/SnackCard';
import SnackList from './components/SnackList';
// import { snacks as snackData } from './data';

export default {
  name: 'App',
  components: {
    Hero,
    TopBanner,
    // SnackCard,
    SnackList,
  },
  data() {
    return {
      snacks: [
        {
          id: 0,
          title: 'Walnuts',
          url: 'hello',
          dateAdded: '2017-05-01',
          description:
            'Oh, king eh? Very nice. And how\'d you get that, eh? By exploiting the workers. By hanging on to outdated imperialist dogma which perpetuates the economic and social differences in our society.',
          category: ['nuts'],
        },
        {
          id: 1,
          title: 'Chocolate Covered Mangos',
          url:
            'hello',
          dateAdded: '2017-05-01',
          description:
            'Oh, king eh? Very nice. And how\'d you get that, eh? By exploiting the workers. By hanging on to outdated imperialist dogma which perpetuates the economic and social differences in our society.',
          category: ['driedFruit'],
        },
      ],
    };
  },
  // data: () => ({
  //   snacks: [],
  // }),
  methods: {
    // filterSnacks() {
    //   // STUB... will actually add filtering later
    //   this.snacks = snackData;
    // },
  },
  created() {
    // this.filterSnacks();
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
