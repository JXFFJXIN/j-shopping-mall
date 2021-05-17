<template>
  <div class="home-container">
      <RouterView/>
      <TabBar/>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue';

export default {
  components: {
    TabBar,
  },
};
</script>

<style>

</style>
