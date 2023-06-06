import { createStore } from 'vuex'

export interface User {
  username: string
  password: string
  level: number
}

export const store = createStore({
  state: {
    users: [],
    user: null,
    isLogin: false
  },
  mutations: {
    // 登陆
    login(state: any, payload: User) {
      state.isLogin = true
      state.user = payload
      localStorage.setItem('user', JSON.stringify(payload))
      localStorage.setItem('isLogin', 'true')
    },
    //注册
    register(state: any, payload: any) {
      const users = [...state.users, {
        ...payload,
        level: 0 //初始化账号等级
      }]
      state.users = users
      localStorage.setItem('users', JSON.stringify(users))
    },
    //登出
    logout(state: any) {
      state.isLogin = false
      localStorage.removeItem('isLogin')
      localStorage.removeItem('user')
      state.user = null
    },
    //初始化
    init(state: any) {
      let users = localStorage.getItem('users')
      users = users ? JSON.parse(users) : []
      
      let user = localStorage.getItem('user')
      user = user ? JSON.parse(user) : null

      state.users = users
      state.user = user
      state.isLogin = localStorage.getItem('isLogin') === 'true'

      // users = users?.map(v => ({
      //   username:v.username,
      //   password: v.password,
      //   level: 0
      // }))
      // localStorage.setItem('users', JSON.stringify(users))
    }
  }
})

store.commit('init')
