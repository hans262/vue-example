<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

const store = useMainStore()
const { currentUser } = storeToRefs(store)

const password = ref(currentUser.value?.password)

function submit() {
  if (password.value) {
    store.updatePassword(password.value)
    ElMessage.success('修改成功')
  }
}

</script>
<template>
  <div class="modify-password">
    <h3>修改密码</h3>
    <el-input class="mb2" v-model="password" placeholder="password" />
    <el-button @click="submit" :disabled="currentUser?.password === password">提交</el-button>
  </div>
</template>
