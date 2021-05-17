<template>
  <div class="classify-container">
    <RouterLink class="search-btn" tag="div" to="/search">
      <van-icon name="search"></van-icon>
      <div>苹果特价1元1斤</div>
    </RouterLink>
    <OneTab />
    <template v-if="showContent">
      <TwoTab />
      <GoodsList/>
    </template>
    <van-loading size="2rem" vertical v-else />
  </div>
</template>

<script>
import OneTab from '@/components/OneTab.vue';
import { mapActions, mapMutations, mapState } from 'vuex';
import TwoTab from '@/components/TwoTab.vue';
import GoodsList from '@/components/GoodsList.vue';

export default {
  components: {
    OneTab,
    TwoTab,
    GoodsList,
  },
  computed: {
    ...mapState({
      showContent: (state) => state.showContent,
      sideList: (state) => state.sideList,
    }),
  },
  methods: {
    ...mapMutations(['resetGoodsList']),
    ...mapActions(['getGoodsList']),
  },
  watch: {
    showContent() {
      if (this.showContent) {
        this.resetGoodsList();
        this.getGoodsList({ type: this.sideList[0], page: 1, sortType: 'all' });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.classify-container {
  width: 375px;
  .search-btn {
    width: 355px;
    height: 33px;
    line-height: 33px;
    background-color: #eee;
    margin: 11px auto 0;
    border-radius: 10px;
    font-size: 14px;
    text-align: center;
    color: #a1a1a1;
    > * {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
