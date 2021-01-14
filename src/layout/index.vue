<template>
  <div class="app">
    <div class="app-header_container">
      <Header />
    </div>

    <div class="app-content_container">
      <Siderbar />
      <Main />
    </div>
  </div>
</template>

<script>
import Siderbar from "@/layout/siderbar";
import Main from "./main";
import Header from "./header";

export default {
  components: {
    Siderbar,
    Main,
    Header,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  .app{
    height: vh(1080);
    width: vw(1920);

    .app-header_container {
      height: vh(60);
      background: gray url('./assets/pic/gril1.jpg');
      margin-bottom: vh(20);
    }

    .app-content_container{
      display: flex;
    }
  }
</style>
