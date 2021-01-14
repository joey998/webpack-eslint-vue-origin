<template>
  <div class="jm-select">
    <div
      :class="{'border-bottom-none': trigger, 'jm-select__trigger': true}"
      @click="trigger = !trigger"
    >
      {{ label ? label: placeholder }}
    </div>
    <div
      v-show="trigger"
      class="jm-select__options"
    >
      <div
        v-for="item in options"
        :key="item[forKey]"
        class="jm-select__option"
        @click="valueChange(item.value)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      default: "请输入",
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
      label: this.value,
    };
  },
  methods: {
    valueChange(value) {
      this.$emit("update:value", value);
      this.trigger = !this.trigger;
    },
  },
};
</script>

<style lang="scss">
  .jm-select {
    cursor: pointer;

    &>div{
      padding: 5px 0;
    }
    .jm-select__trigger{
      &.border-bottom-none{
        border-bottom: none;
      }
      border: 2px solid #4266a0;
      min-width: 100px;
    }
    .jm-select__options{
      border: 2px solid #4266a0;
      border-top: none;
      .jm-select__option{
        margin: 5px;
        &:hover{
          background: white;
          color: #4266a0;
        }
      }
    }
  }
</style>
