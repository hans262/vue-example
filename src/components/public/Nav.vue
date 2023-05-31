<script lang="ts" setup>
// import { ref } from 'vue'


</script>
<template>
  <el-menu default-active="2" background-color="#545c64" text-color="#fff" class="el-menu-vertical-demo">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>系统设置</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span>基本资料建档</span>
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item one</el-menu-item>
      <el-menu-item index="2-4">item two</el-menu-item>
      <el-menu-item index="2-5">item one</el-menu-item>
      <el-menu-item index="2-6">item two</el-menu-item>
      <el-menu-item index="2-7">item one</el-menu-item>
      <el-menu-item index="2-8">item two</el-menu-item>
      <el-menu-item index="2-9">item one</el-menu-item>
      <el-menu-item index="2-10">item two</el-menu-item>
      <el-menu-item index="2-11">item one</el-menu-item>
      <el-menu-item index="2-12">item two</el-menu-item>
      <el-menu-item index="2-13">item one</el-menu-item>
      <el-menu-item index="2-14">item two</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<style scoped>
.el-menu {
  /* border-right-width: 0; */
}

.el-menu-vertical-demo {
  background-color: #545c64;
  color: #fff;
}
</style>