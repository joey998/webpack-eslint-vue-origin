<template>
  <div class="test">
    <div>
      <el-button
        type="text"
        size="default"
        @click="syncChangeData"
      >
        同步点击
      </el-button>
      <el-button
        type="text"
        size="default"
        @click="syncChangeDataB"
      >
        同步点击B
      </el-button>
      <el-button
        type="text"
        size="default"
        @click="asyncChangeData"
      >
        异步点击
      </el-button>
      <el-button
        type="text"
        size="default"
        @click="asyncChangeDataB"
      >
        异步点击B
      </el-button>
      <el-button
        type="text"
        size="default"
        @click="asyncChangeDataC"
      >
        异步点击C
      </el-button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    syncChangeData() {
      console.log("sync1");
      this.$store.commit("dd/syncChangeData", "i'm sync");
      console.log("sync2");
    },
    syncChangeDataB() {
      console.log("syncB1");
      this.$store.commit("dd/syncChangeDataB", "i'm sync");
      console.log("syncB2");
    },
    asyncChangeData() {
      console.log("async1");
      this.$store.dispatch("dd/asyncChangeData", "i'm asyncChangeData");
      console.log("async2");
    },
    asyncChangeDataB() {
      console.log("asyncB1");
      this.$store.dispatch("dd/asyncChangeDataB", "i'm asyncChangeData");
      console.log("asyncB2");
    },
    asyncChangeDataC() {
      console.log("asyncC1");
      this.$store.dispatch("dd/asyncChangeDataC", "i'm asyncChangeData");
      console.log("asyncC2");
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
