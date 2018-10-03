<template>
  <div class="my-16 w-5/6">
    <div class="p-16">
      <p class="text-center tracking-wide text-base uppercase text-indigo">
        Search and vote for your favorite snacks.
      </p>
      <input type ="search" class="" v-model="searchTerm" placeholder="Search" :name="name">

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: ''
      },
      name: {
        default: ''
      }
    },
    data: function() {
      return { searchTerm: this.value }
    },
    watch: {
      value: function(val) {
        this.searchTerm = val
      },
      searchTerm: function(val) {
        this.$emit('input', val)
      }
    }
  }
</script>