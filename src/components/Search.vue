<template>
  <div class="my-16 w-1/2">
    <div class="p-16 bg-grey flex flex-col">
      <p class="text-center tracking-wide text-base uppercase text-white font-sans">
        Search to your heart's content:
      </p>
      <input type ="search" class="border border-indigo-blue" v-model="searchTerm" placeholder="Search" :name="name">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: '',
    },
    name: {
      default: '',
    },
  },
  data() {
    return { searchTerm: this.value };
  },
  watch: {
    value(val) {
      this.searchTerm = val;
    },
    searchTerm(val) {
      this.$emit('input', val);
    },
  },
};
</script>
