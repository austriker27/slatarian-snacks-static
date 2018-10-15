<template>
  <div class="snack-list flex flex-col flex-wrap">
    <transition-group name="fade">
      <Snack class="snack p-8 flex justify-center" v-for="snack in snacks" :item="snack" :key="snack.id" />
    </transition-group>
  </div>
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
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
