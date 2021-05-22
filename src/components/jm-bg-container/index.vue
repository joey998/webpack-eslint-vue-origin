<template>
  <div class="jm-bg-container">
    <div
      ref="bgContainer"
      class="bg-container"
      :style="{padding: padding}"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    padding: [String, Number],
  },
};
</script>

<style lang="scss" scoped>
  .jm-bg-container{
    border: 1px solid;
    border-image: url("@/assets/pic/bg.png");
    border-image-slice: 8;
    border-image-width: 8px;

    overflow: hidden;
    cursor: pointer;
    .bg-container{
      background: $primaryBackground;
    }

  }
</style>
