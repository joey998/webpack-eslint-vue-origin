<template>
  <div class="header">
    <div class="header-left">
      <div class="content">
        {{ $t("main.dashboard.huanYing") }}
      </div>
      <div class="select-bar">
        <div class="select-bar-content">
          {{ $t("main.dashboard.jianKongCheDao") }}
        </div>
        <div>
          <!-- <JmSelect
            :options="selectBar.options"
            :value.sync="selectBar.value"
          /> -->
          <JmSelectTree
            :options="selectBar.options"
            :value.sync="selectBar.value"
          />
        </div>
      </div>
    </div>
    <div class="header-right">
      <div class="jm-button">
        {{ $t("main.dashboard.changeGui") }}
      </div>
      <div class="jm-button">
        {{ $t("main.dashboard.pingJie") }}
      </div>
      <div class="jm-button">
        {{ $t("main.dashboard.canSun") }}
      </div>
      <div class="jm-button">
        {{ $t("main.dashboard.dangQianZhongLiang") }}
      </div>
    </div>
  </div>
</template>

<script>
// import JmSelect from "@/components/select";
import JmSelectTree from "@/components/jm-select-tree";

export default {
  components: {
    JmSelectTree,
  },
  data() {
    return {
      selectBar: {
        value: "",
        options: [
          { value: "12", label: "我是标签" },
          { value: "123", label: "我是标签1111111111111111" },
        ],
      },

    };
  },
  methods: {
    selectBarChange(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  line-height: vh(32);
  justify-content: space-between;
  align-items: center;
  .header-left {
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    margin-right: vw(20);
    width: vw(1300);

    .content {
      font-size: vw(20);
      font-weight: bold;
    }
    .select-bar{
      display: flex;
      height: vh(32);
      ::v-deep .jm-select-tree .jm-select__trigger{
        min-width: vw(1000);
      }
      .select-bar-content {
        margin-right: vw(10);
      }
    }
  }
  .header-right{
    display: flex;
    justify-content: space-between;
    width: vw(270);
  }
}
</style>
