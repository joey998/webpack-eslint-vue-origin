<template>
  <div class="app-siderbar">
    <el-menu
      mode="vertical"
      default-active="1"
      @select="selectChange"
    >
      <el-submenu
        v-for="(submenus, index) in filteredMenu"
        :key="submenus.title"
        :index="index + 1 + ''"
      >
        <template slot="title">
          {{ submenus.title }}
        </template>
        <el-menu-item
          v-for="(item, subIndex) in submenus.children"
          :key="item.title"
          :index="(index + 1) + '-' + (subIndex + 1)"
        >
          {{ item.title }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import routes from "@/router/routes";

export default {
  components: {
    // SiderBar,
  },
  data() {
    return {
      // menus: routes,
    };
  },
  computed: {
    filteredMenu() {
      return routes.filter((item) => item.title);
    },
  },
  mounted() {
  },
  methods: {
    getLists() {

    },
    selectChange(index) {

    },
  },
};
</script>

<style lang="scss" scoped>
.app-siderbar {
  width: vw(240);
  height: vh(980);
  margin: 0 0 0 vw(10);
  overflow-y: scroll;
  overflow-x: hidden;
  @extend %addCornerBorder;

  &::after{
    bottom: -2px;
    box-sizing: border-box;
  }
}
</style>
