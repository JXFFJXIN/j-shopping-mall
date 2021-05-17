<template>
  <div class="classify-container">
    <div class="search-btn">
      <van-icon name="search"></van-icon>
      <div>苹果特价1元1斤</div>
    </div>
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
import { mapState } from 'vuex';
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
    }),
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
