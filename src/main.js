// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import SnackCard from './components/SnackCard';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

new Vue({
  components: { SnackCard },
  template: '<SnackCard/>',

  el: '#v-for-snacks',
  data: {
    snacks: [
      { title: 'Gummy Bears', description: 'There’s just something about our 12 flavors of gummy bears! We promise these are superb quality candies you won’t want to put down.Flavors include cherry, pink grapefruit, watermelon, strawberry, orange, blue raspberry, lime, grape, green apple, mango, pineapple and lemon.' },
    ],
  },
});
