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
          title: 'A Better Way to Learn Angular 2',
          url: 'https://thinkster.io/tutorials/learn-angular-2',
          datePublished: '2017-05-01',
          description:
            'The de facto roadmap for learning Angular 2. This tutorial series will teach you Angular 2\'s fundamental concepts paired with real world examples, descriptions, and screencasts.',
          category: ['nuts'],
        },
        {
          title: 'Building Real World, Production Quality Apps with React and Redux',
          url:
            'https://thinkster.io/tutorials/build-a-real-world-react-redux-application',
          datePublished: '2017-05-01',
          description:
            'While most tutorials online cover the basics of React, Redux, and other tools individually, the purpose of this tutorial is to cover all of them in a cohesive manner.',
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
