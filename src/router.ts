import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Account from './components/Account.vue'

const Login = defineAsyncComponent(() => import('./components/Login.vue'))

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Login },
  { path: '/account', component: Account },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})