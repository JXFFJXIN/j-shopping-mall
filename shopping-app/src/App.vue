<template>
  <div id="app">
    <RouterView/>
  </div>
</template>

<script>
export default {
  created() {
    const counterMap = JSON.parse(localStorage.getItem('goods')) || {};
    this.$store.commit('setCounterMap', counterMap);
  },
};
</script>

<style lang="less">

</style>
