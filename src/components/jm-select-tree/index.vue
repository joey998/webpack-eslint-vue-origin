<template>
  <div class="jm-select-tree">
    <div
      :class="{'border-bottom-none': trigger, 'jm-select__trigger': true}"
      @click="trigger = !trigger"
    >
      {{ label ? label: placeholder }}
      <i
        class="el-icon-arrow-down to-right"
        :class="{'angel-reverse': trigger}"
      />
    </div>
    <div
      v-show="trigger"
      class="jm-select__options"
    >
      <el-tree
        ref="tree"
        :data="tree.options"
        node-key="id"
        :props="tree.defaultProps"
        empty-text="空"
        :show-checkbox="true"
        :highlight-current="true"
        @node-click="nodeClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      default: "请选择",
      type: String,
    },
    value: {
      default: "",
      type: String,
      require: true,
    },
    options: {
      default: () => [{ value: "", label: "" }],
      type: Array,
      require: true,
    },
    forKey: {
      default: "value",
      type: String,
      require: true,
    },
  },
  data() {
    return {
      trigger: false,
      label: "",
      tree: {
        defaultProps: {
          children: "children",
          label: "label",
        },
        options: [{
          id: 1,
          label: "一级 1",
          children: [{
            id: 4,
            label: "二级 1-1",
            children: [{
              id: 9,
              label: "三级 1-1-1",
            }, {
              id: 10,
              label: "三级 1-1-2",
            }],
          }],
        }, {
          id: 2,
          label: "一级 2",
          children: [{
            id: 5,
            label: "二级 2-1",
          }, {
            id: 6,
            label: "二级 2-2",
          }],
        }, {
          id: 3,
          label: "一级 3",
          children: [{
            id: 7,
            label: "二级 3-1",
          }, {
            id: 8,
            label: "二级 3-2",
          }],
        }],
      },
    };
  },
  methods: {
    valueChange(value, label) {
      this.$emit("update:value", value);
      this.label = label;
      this.trigger = !this.trigger;
    },
    nodeClick(a, b, c) {
      console.log(a, b, c);
    },
  },
};
</script>

<style lang="scss">
  .jm-select-tree {
    cursor: pointer;
    position: relative;

    &>div{
      padding: vh(5) 0 0;
    }
    .jm-select__trigger{
      &.border-bottom-none{
        border-bottom: none;
      }
      border: 1px solid $primaryBorder;
      min-width: vw(300);
      padding: 0 vw(10);
      line-height: vh(32);

      i{
        line-height: vh(32);
      }
    }
    .jm-select__options{
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid $primaryBorder;
      border-top: none;
      .jm-select__option{
        margin: vh(5) vw(5);
        &:hover{
          background: white;
          color: $primaryBorder;
        }
      }
    }
  }
</style>
