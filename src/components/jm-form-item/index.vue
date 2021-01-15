<template>
  <div class="jm-form-item">
    <div
      class="jm-form-item__label"
      :style="{width: labelWidth}"
    >
      {{ label }}
    </div>
    <div
      class="jm-form-item__value"
    >
      <input
        :value="valueModel"
        type="text"
        @change="valueChange"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    labelWidth: {
      type: String,
      default: "88px",
    },
    label: {
      required: true,
      type: String,
    },
  },
  computed: {
    valueModel() {
      return this.value;
    },
  },
  methods: {
    valueChange(event) {
      console.log(event.target.value);
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .jm-form-item{
    font-size: vw(15);
    margin-bottom: vh(10);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .jm-form-item__label{
      flex-shrink: 0;
    }
    .jm-form-item__value{
      input{
        padding: vh(4) vw(4);
        width: 100%;
        border: 1px solid $primaryBorder;
        background: $primaryBackground;
        color: white;
        outline: none;
      }
    }
  }
</style>
