<template>
  <div class="flex justify-center w-full bg-outrun-green">
    <div class="p-4 flex flex-col  w-5/6 md:w-2/5">
      <p class="">
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
