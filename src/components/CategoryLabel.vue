<template>
  <div>
    <span class="rounded text-white font-aktiv font-semibold text-xs uppercase p-1" label="label" :style="{ backgroundColor: color }"> {{ text }} </span>
  </div>
</template>

<script>
import { categories } from '../data';

export default {
  name: 'category-label',
  props: {
    category: {
      type: String,
      require: true,
    },
  },
  computed: {
    text() {
      return categories[this.category].label;
    },
    color() {
      return categories[this.category].color;
    },
  },
};
</script>
