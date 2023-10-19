<template>
  <div class="container">
    <div>
      <el-table row-key="id">
        <el-column type="selection"></el-column>
        <el-column label="分类"></el-column>
        <el-column label="名称"></el-column>
        <el-column label="操作">
          <template>
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="info" size="mini">删除</el-button>
          </template>
        </el-column>
      </el-table>
      <el-pagination></el-pagination>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const data = ref([]);
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  height: 100%;
  padding: 5px;
}
</style>
