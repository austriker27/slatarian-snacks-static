<template>
  <Transition name="swap" mode="out-in">
  <div class="snack-list" :key="snacks">
    <Tutorial class="snack" v-for="snack in snacks" :item="snack" :key="snack" />
  </div>
  </Transition>
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
  .snack-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }

  .snack {
    padding: 20px;
  }

  @media only screen and (min-width: 600px) {
    .snack {
      width: 50%;
    }
  }

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
