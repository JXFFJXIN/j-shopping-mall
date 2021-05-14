<template>
  <div class="product-list">
    <SearchBox @submit="searchSubmit" :data="categoryList" />
    <a-button class="product-add-btn">
      <RouterLink :to="{name:'ProductAdd'}">添加商品</RouterLink>
    </a-button>
    <ProductTable
      :data="tableData"
      :page="page"
      @change="changePage"
      :categoryList="categoryList"
      @edit="handleEdit"
      @remove="handleRemove"
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
      this.searchForm = form;
      this.getTableData();
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
    handleEdit(it) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: it.id,
        },
      });
    },
    handleRemove(it) {
      this.$confirm({
        title: '确认删除',
        content: () => <div style="color:red;">{`确认删除标题为:${it.title}的商品吗`}</div>,
        onOk: () => {
          api.remove({
            id: it.id,
          }).then(() => {
            console.log(this);
            this.getTableData();
          });
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'confirm-box',
      });
    },
  },
};
</script>

<style lang="less" scoped >
@import "~@/styles/var.less";
.product-list{
  position: relative;
  .product-add-btn{
    position: absolute;
    right: 10px;
    top: 14px;
    background: @color-primary;
    color: @color-white;
    &:hover{
      background: @color-white;
      color: @color-primary;
    }
  }
}
</style>
