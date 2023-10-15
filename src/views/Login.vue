<template>
  <div class="container">
    <div class="form-container">
      <div class="title">伏 羲</div>
      <el-form v-model="form" ref="formRef">
        <el-form-item label="账号" prop="username">
          <el-input placeholder="请输入账号" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <div>
          <el-button type="primary" @click="login" style="width: 200px"
            >登录</el-button
          >
        </div>
        <div style="text-align: right; margin-top: 5px">
          还没有账号？<el-button type="text">去注册</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const form = ref({
  username: "",
  password: "",
});
const formRef = ref<FormInstance>();
const login = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log("submit!");
    }
  });
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .form-container {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
  }
}
</style>
