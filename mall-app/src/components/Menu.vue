<template>
    <div class="menu-container">
      <a-menu
        :default-selected-keys="[$router.currentRoute.matched[1] ?
                                $router.currentRoute.matched[1].name :
                                '']"
        :default-open-keys="[$router.currentRoute.matched[0].name]"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <template v-for="it in $store.state.menuRoutes">
          <a-sub-menu v-if="!it.meta.hidden" :key="it.name">
            <span slot="title"
            ><a-icon :type="it.meta.icon" /><span>{{it.meta.title}}</span></span
          >
          <a-menu-item
          v-for="child in it.children"
          :key="child.name">
          <RouterLink :to="{name: child.name}">
            <a-icon :type="child.meta.icon" />{{child.meta.title}}</RouterLink>
          </a-menu-item>
        </a-sub-menu>
        </template>
      </a-menu>
    </div>
</template>
