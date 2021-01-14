<template>
  <div class="main-container">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./header";
import Main from "./main";

export default {
  components: {
    Header,
    Main,
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
