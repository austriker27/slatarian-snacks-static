<template>
  <transition name="swap" mode="out-in">
    <div class="snack-list flex flex-col flex-wrap">
      <Snack class="snack p-8 flex justify-center" v-for="snack in snacks" :item="snack" :key="snack.id" />
    </div>
  </transition>
</template>

<script>
import Snack from './Snack';

export default {
  name: 'snack-list',
  components: { Snack },
  props: ['snacks'],
};
</script>

<style scoped>
  

   /* VUE TRANSITION */
  .swap-enter-active, .swap-leave-active {
    transition: all .25s ease-in-out;
  }
  .swap-enter, .swap-leave-active {
    opacity: 0;
  }
  .swap-enter {
    transform: translateX(75px);
  }
  .swap-leave-to {
    transform: translateX(-75px);
  }
</style>
