import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



import Home from './views/Home.vue'
import About from './views/About.vue'

// import Login from './views/Login.vue'

import Container from './components/Container.vue'

// import Home from './components/children/Home.vue'

// import Table from './components/children/Table.vue'
// import MsgBox from './components/children/MsgBox.vue'
// import DateText from './components/children/DateText.vue'
// import Notification from './components/children/Notification.vue'

// const Transfer=() => import(/* webpackChunkName: "transfer" */ './components/children/Transfer.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Container },
  { path: '/about', component: About },

  // {
  //   path:'*',
  //   redirect:'/',
  // },{
  //   name:'login',
  //   path:'/login',
  //   component:Login
  // },{
  //   name: 'container',
  //   path: '/',
  //   component:Container,
  //   redirect:'/home',
  //   children:[{
  //     name:'首页',
  //     path:'home',
  //     component:Home,
  //   },{
  //     name:'系统设置/模块管理',
  //     path:'mkgl',
  //     component:Table
  //   },{
  //     name:'系统设置/用户管理',
  //     path:'yhgl',
  //     component:MsgBox,
  //   },{
  //     name:'系统设置/数据字典',
  //     path:'sjzd',
  //     component:DateText,
  //   },{
  //     name:'系统设置/角色管理',
  //     path:'jsgl',
  //     component:Notification,
  //   },{
  //     name:'基本资料建档/公司资料',
  //     path:'gszl',
  //     component:Transfer,
  //   },

  //   {
  //     name:'入库作业/申请/批次建立',
  //     path:'pcjl',
  //     component:Transfer,
  //   }]
  // }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(ElementPlus)
  .use(router)
  .mount('#app')
