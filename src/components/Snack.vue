<template>
  <div>
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p class="meta">
      Published
      <span class="meta-bit"> {{ item.datePublished }}</span>
      at
      <span class="meta-bit">{{ item.url }} </span>
    </p>
    <p> {{ item.description }}</p>
    <p>
      <CategoryLabel class="category-label" v-for="category in item.category" :category="category" :key="category" />
    </p>
  </div>
</template>

<script>
import CategoryLabel from './CategoryLabel';

// const parser = document.createElement('a');

export default {
  name: 'snack',
  props: ['item'],
  components: { CategoryLabel },
  methods: {
    // eslint-disable-next-line
    // domainOf: url => ((parser.href = url), parser.hostname.replace(/www\./, '')),
  },
};
</script>
