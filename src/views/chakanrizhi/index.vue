<template>
  <div class="table-container">
    <div class="query-param">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
        :inline="true"
        size="normal"
      >
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
        <el-form-item label="操作模块">
          <el-input v-model="form.operaionModule" />
        </el-form-item>
      </el-form>
    </div>
    <div class="query-button" />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
