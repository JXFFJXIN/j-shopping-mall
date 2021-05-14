<template>
  <div class="product-list">
    <SearchBox @submit="searchSubmit" :data="categoryList" />
    <ProductTable
      :data="tableData"
      :page="page"
      @change="changePage"
      :categoryList="categoryList"
    />
  </div>
</template>

<script>
import SearchBox from '@/components/Search.vue';
import ProductTable from '@/components/ProductTable.vue';
import categoryApi from '@/api/category';
import api from '@/api/product';

export default {
  components: {
    SearchBox,
    ProductTable,
  },
  data() {
    return {
      categoryList: [],
      tableData: [],
      searchForm: {},
      page: {
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        total: 1,
      },
      categoryObj: {},
    };
  },
  async created() {
    await categoryApi.list().then((res) => {
      this.categoryList = res.data;
      res.data.forEach((item) => {
        this.categoryObj[item.id] = item;
      });
      console.log(res);
    });
    this.getTableData();
  },
  methods: {
    searchSubmit(form) {
      console.log(form);
      this.searchForm = form;
    },
    getTableData() {
      api.list({
        page: this.page.current,
        size: this.page.pageSize,
        ...this.searchForm,
      }).then((res) => {
        this.page.total = res.total;
        this.tableData = res.data.map((item) => ({
          ...item,
          categoryName: this.categoryObj[item.category].name,
        }));
      });
    },
    changePage(page) {
      this.page = page;
      this.getTableData();
    },
  },
};
</script>

<style>

</style>
