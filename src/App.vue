<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()

watch(route, () => {
  console.log(route.path)
})

</script>

<template>
  <div class="app">
    <img alt="Vue logo" src="/vite.svg" class="logo">

    <el-space>
      <RouterLink to="/">
        <el-button>Home</el-button>
      </RouterLink>
      <RouterLink to="/about">
        <el-button>About</el-button>
      </RouterLink>
      <RouterLink to="/login">
        <el-button>Login</el-button>
      </RouterLink>
    </el-space>

    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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

.app {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>