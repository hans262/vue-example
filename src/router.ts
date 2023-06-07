import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Account from './components/Account.vue'
const Login = () => import('./components/Login.vue')
import ModifyPassword from './components/ModifyPassword.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Login },
  { path: '/account', component: Account },
  { path: '/modify_password', component: ModifyPassword },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})