<template>
  <div class="app-siderbar">
    <JmBgContainer padding="1px">
      <el-menu
        mode="vertical"
        default-active="1"
        :unique-opened="true"
        @select="selectChange"
      >
        <sub-menu
          :data="filteredMenu"
          path=""
        />
      </el-menu>
    </JmBgContainer>
  </div>
</template>

<script>
import routes from "@/router/routes";
import JmBgContainer from "@/components/jm-bg-container";
import subMenu from "./components/sub-menu";

export default {
  components: {
    // SiderBar,
    JmBgContainer,
    subMenu,
  },
  data() {
    return {
      // menus: routes,
    };
  },
  computed: {
    filteredMenu() {
      return routes.filter((item) => item.meta.hidden !== true);
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
  /*  @extend %addCornerBackground; */
}
</style>
<style lang="scss">
.app-siderbar{
  .jm-bg-container{
    height: 100%;
    .bg-container{
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
