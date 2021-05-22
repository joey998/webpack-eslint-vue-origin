<template>
  <div class="sub-menu">
    <div
      v-for="submenus in data"
      :key="submenus.meta.title"
      class="sub-menu_container"
    >
      <el-submenu
        v-if="submenus.children"
        :index="Math.random() + ''"
      >
        <template slot="title">
          {{ submenus.meta.title }}
        </template>

        <sub-menu
          :data="submenus.children"
          :path="currentPath + submenus.path + '/'"
        />
      </el-submenu>

      <el-menu-item
        v-else
        @click="itemClick(submenus.path)"
      >
        <!-- <router-link :to="currentPath + submenus.path"> -->
        {{ submenus.meta.title }}
        <!-- </router-link> -->
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  props: ["data", "path"],
  data() {
    return {

    };
  },
  computed: {
    currentPath() {
      return this.path;
    },
  },
  methods: {
    itemClick(path) {
      const dd = `${this.currentPath}${path}`;
      this.$router.push({ path: dd });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
