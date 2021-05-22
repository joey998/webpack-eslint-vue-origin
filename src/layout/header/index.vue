<template>
  <div class="app-header">
    <div class="app-header-content">
      <div
        v-for="(item, index) in headerNav"
        :key="item.title"
      >
        <span class="content"><a
          href="#"
          class="regular"
          :class="{'last-index': index === headerNav.length -1}"
          @click.prevent="aClick(item.path)"
        >{{ item.title }}</a></span>
        <span
          v-if="index !== headerNav.length - 1"
          class="arrow"
        >> &nbsp;</span>
      </div>
    </div>
    <div class="app-header-operation">
      <i class="el-icon-menu" />
      <i class="el-icon-s-tools" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState("header", ["headerNav"]),
  },
  methods: {
    aClick(path) {
      // this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header{
  background-image: url('~@/assets/pic/header-bg.gif');
  background-size: 100% 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .app-header-content{
    margin: vh(40) vw(120) 0 vw(272);
    background: $primaryBackground;
    height: vh(20);
    font-size: vh(18);
    line-height: vh(20);
    color: white;
    overflow: hidden;

    &>div{
      float: left;
    }
    .content{
      &>a{
        text-decoration: none;
        cursor:text;
      }
      .regular{
        color: white;
      }
      .last-index{
        color: $linkColor;
      }
    }
  }

  .app-header-operation{
    position: absolute;
    right: vw(20);
    top: 0;
    width: vw(65);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
      color: transparent;
      cursor: pointer;
    }
  }
}
</style>
