<template>
  <span label="label" :style="{ backgroundColor: color }"> {{ text }} </span>
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
