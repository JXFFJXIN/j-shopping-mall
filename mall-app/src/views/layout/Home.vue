<template>
  <div class="home-container">
    <LeftMenu />
    <div :class="{ 'main-container': true, 'menu-unfold': $store.state.collapsed }">
      <ViewHeader />
      <RouterView/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/Menu.vue';
import ViewHeader from '@/components/ViewHeader.vue';

export default {
  components: {
    LeftMenu,
    ViewHeader,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="less" >
@import "~@/styles/var.less";
.home-container {
  .menu-container {
    width: 180px;
    height: 100%;

    position: fixed;

    .ant-menu {
      height: 100%;
    }
  }
  .main-container {
    margin-left: 180px;
    transition: all 0.25s;
    &.menu-unfold {
      margin-left: 80px;
    }
    header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid @color-gray;
      padding: 0 10px;
      .breadcrumb-container {
        display: inline-block;
        margin-left: 20px;
      }
      .user-info-container {
        float: right;
        cursor: pointer;
        text-align: center;
        li {
          padding: 0 20px;
        }
        li:not(:first-child) {
          display: none;
          &:hover {
            background: @color-primary;
            color: @color-white;
            border-radius: 5px;
            font-weight: 700;
          }
        }
        &:hover {
          li {
            display: block;
          }
        }
      }
    }
  }
}
</style>
