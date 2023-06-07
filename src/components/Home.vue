<script setup lang="ts">
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'
const { users } = storeToRefs(useMainStore())

</script>

<template>
  <div class="home">
    <el-descriptions cl title="账号列表" direction="vertical" :column="3" border>
      <el-descriptions-item label="Username" class-name="no-label"></el-descriptions-item>
      <el-descriptions-item label="Password" class-name="no-label"></el-descriptions-item>
      <el-descriptions-item label="Level" class-name="no-label"></el-descriptions-item>

      <template v-for="user in users" :key="user.username">
        <el-descriptions-item label-class-name="no-label">{{ user.username }}</el-descriptions-item>
        <el-descriptions-item label-class-name="no-label">{{ user.password }}</el-descriptions-item>
        <el-descriptions-item label-class-name="no-label">{{ user.level }}</el-descriptions-item>
      </template>
    </el-descriptions>

  </div>
</template>
<style >
.no-label {
  display: none;
}
</style>
