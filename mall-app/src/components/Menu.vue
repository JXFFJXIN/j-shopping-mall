<template>
    <div class="menu-container">
      <a-menu
        :default-selected-keys="[defaultSelectKey]"
        :default-open-keys="[defaultOpenKey]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <template v-for="it in $store.state.menuRoutes">
          <a-sub-menu v-if="!it.meta.hidden" :key="it.name">
            <span slot="title"
            ><a-icon :type="it.meta.icon" /><span>{{it.meta.title}}</span></span
          >
          <template  v-for="child in it.children">
            <a-menu-item
          v-if="!child.meta.hidden"
          :key="child.name">
          <RouterLink :to="{name: child.name}">
            <a-icon :type="child.meta.icon" />{{child.meta.title}}</RouterLink>
          </a-menu-item>
          </template>

        </a-sub-menu>
        </template>
      </a-menu>
    </div>
</template>
<script>
export default {
  computed: {
    defaultSelectKey() {
      return this.$router.currentRoute.matched[1]
        ? this.$router.currentRoute.matched[1].name
        : '';
    },
    defaultOpenKey() {
      return this.$router.currentRoute.matched[0].name;
    },
  },
  watch: {
    $route() {
      console.log(this.$router);
    },
  },
  created() {
    console.log(this.$router);
  },
};
</script>
