<template>
  <div class="flex justify-center">
    <div class="p-4 bg-indigo8 flex flex-col w-1/2">
      <p class="text-center text-base text-white font-aktiv">
      </p>
      <input type ="search" class="border border-indigo-blue font-aktiv rounded" v-model="searchTerm" placeholder="Search names and descriptions" :name="name">

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
