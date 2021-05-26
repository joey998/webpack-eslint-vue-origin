<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item
        prop="user"
        label="用户名"
      >
        <el-input v-model="form.user" />
      </el-form-item>
      <el-form-item
        prop="password"
        label="密码"
      >
        <el-input
          v-model="form.password"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          立即创建
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, confirmLogin } from "@/api/login";
import Img from "@/assets/pic/bg.png";

console.log(Img);
export default {
  data() {
    return {
      form: {
        user: "",
        password: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      // login({ loginName: this.form.user, password: this.form.password })
      //   .then((res) => {
      // if (res.data.errorCode === "3") {
      //   confirmLogin({ loginName: this.form.user, password: this.form.password })
      //     .then(() => {
      this.$router.push({ path: "rizhiguanli" });
      //     });
      // }
    //     });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
