<template>
  <div class="app-siderbar" />
</template>

<script>
export default {
  methods: {
    getLists() {
    },
  },
};
</script>

<style lang="scss" scoped>
.app-siderbar {
  width: vw(240);
  height: vh(980);
  margin: 0 0 0 vw(10);
  @extend %addCornerBorder;
}
</style>
