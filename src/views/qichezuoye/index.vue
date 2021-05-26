<template>
  <div class="main-container">
    <Header />
    <Main />
  </div>
</template>

<script>
import { findTreeBean } from "@/api/qichezuoye";
import Header from "./header";
import Main from "./main";

export default {
  components: {
    Header,
    Main,
  },
  mounted() {
    findTreeBean()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .main-container{
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
