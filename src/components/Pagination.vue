<template>
  <div class="pagination-component">
    <ul v-show="totalPages > 1" class="pagination">
      <li :class="'page-item ' + allowedPageClass(page - 1)">
        <a class="page-link" href="javascript:void(0)" @click="prev">&lt;</a>
      </li>

      <li :class="'page-item ' + activeClass(pageNum)" v-for="pageNum in totalPages" :key="pageNum" >
        <a class="page-link" href="javascript:void(0)" @click="setPage(pageNum)">{{ pageNum }}}</a>
      </li>

      <li :class="'page-item ' + allowedPageClass(page + 1)">
        <a class="page-link" href="javascript:void(0)" @click="next">&gt;</a>
      </li>
    </ul>

    <p v-show="parseInt(items)">{{ count }}}</p>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    countText: {
      type: String,
      default: 'Showing {from} to {top} of {count} snacks|{count} snacks|1 snack',
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  model: {
    prop: 'currentPage',
    event: 'page-change',
  },
  data() {
    return { page: this.currentPage };
  },
  watch: {
    currentPage(val) {
      this.page = val;
    },
  },
  computed: {
    totalPages() {
      return this.items ? Math.ceil(this.items / this.perPage) : 1;
    },
    count() {
      const from = (this.page - 1) * this.perPage + 1;
      const to = this.page === this.totalPages ? this.items : from + this.perPage - 1;
      const parts = this.coutnText.split('|');
      const i = this.items === 1 ? 2 : this.totalPages === 1 ? 1 : 0;

      return parts[i].replace('{count}', this.items).replace('{from}', from).replace('{top}', to);
    },
  },
  methods: {
    setPage(page) {
      if (this.allowedPage(page)) {
        this.page = page;
        this.$emit('page-change', page);
      }
    },
    next() {
      return this.setPage(this.page + 1);
    },
    prev() {
      return this.setPage(this.page - 1);
    },
    allowedPage(page) {
      return this.allowedPage(page) ? '' : 'disabled';
    },
    activeClass(page) {
      return this.page === page ? 'active' : '';
    },
  },
};
</script>

<style scoped>
  .pagination-component {
    text-align: center;
  }
</style>
