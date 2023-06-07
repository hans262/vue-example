<script setup lang="ts">
import { computed, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from './store'
import { storeToRefs } from 'pinia'

const main = useMainStore()

const { currentUser, isLogin } = storeToRefs(main)

const route = useRoute()
const router = useRouter()
const currentPath = ref('/login')

watch(route, () => {
  if (route.path === '/login') {
    currentPath.value = route.path
  }
  if (route.path === '/register') {
    currentPath.value = route.path
  }
  // console.log(route.path)
})

function loginClick() {
  router.push('/login')
}

function registerClick() {
  router.push('/register')
}

function logout() {
  main.logout()
  router.push('/login')
}

const toPath = computed(() => {
  if (isLogin.value) {
    return '/account'
  } else {
    return currentPath.value
  }
})

function toDate() {
  const h = new Date().getHours()

  if (h >= 5 && h < 11) {
    return '早上好'
  }

  if (h >= 11 && h < 14) {
    return '中午好'
  }

  if (14 >= 2 && h < 19) {
    return '下午好'
  }

  return '晚上好'
}

</script>

<template>
  <div class="app">
    <div class="header">
      <img alt="Vue logo" src="/vite.svg" class="logo">
      <el-space>
        <RouterLink to="/">
          <el-button :class="{ active: route.path === '/' }">
            首页
          </el-button>
        </RouterLink>
        <RouterLink to="/about">
          <el-button :class="{ active: route.path === '/about' }">关于</el-button>
        </RouterLink>
        <RouterLink :to="toPath">
          <el-dropdown v-if="isLogin">
            <el-button :class="{
              active: route.path === '/account' || $route.path === '/modify_password'
            }">
              {{ currentUser?.username }},{{ toDate() }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>账号信息</el-dropdown-item>
                <el-dropdown-item :class="{
                  dropdownactive: route.path === '/modify_password'
                }" @click="$router.push('/modify_password')">修改密码</el-dropdown-item>
                <el-dropdown-item @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-dropdown v-else>
            <el-button :class="{ active: route.path === '/login' || route.path === '/register' }">
              {{ currentPath === '/login' ? '登陆' : '注册' }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-if="currentPath === '/login'" @click="registerClick">
                  注册
                </el-dropdown-item>
                <el-dropdown-item v-else @click="loginClick">登陆</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </RouterLink>
      </el-space>
      <el-divider :style="{ margin: '24px 0 0 0', border: 'none' }"></el-divider>
    </div>
    <div class="content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.header {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: #fbfbfb;
  box-shadow: 0px 4px 1px 4px #fbfbfb;
  margin-bottom: 24px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.active {
  color: var(--el-button-active-text-color);
  border-color: var(--el-button-active-border-color);
  background-color: var(--el-button-active-bg-color);
  outline: 0;
}

.el-button:focus-visible {
  outline: none;
  outline-offset: 1px;
}

.content {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
</style>

<style>
.dropdownactive {
  background-color: var(--el-dropdown-menuItem-hover-fill);
  color: var(--el-dropdown-menuItem-hover-color);
}
</style>