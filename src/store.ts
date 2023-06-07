import { defineStore } from 'pinia'

export interface User {
  username: string
  password: string
  level?: number
}

// 第一个参数是你的应用中 Store 的唯一 ID。
export const useMainStore = defineStore('main', {
  state: () => {
    //初始化工作
    const localUsers = localStorage.getItem('users')
    const users = localUsers ? JSON.parse(localUsers) as User[] : []

    const localUser = localStorage.getItem('user')
    const currentUser = localUser ? JSON.parse(localUser) as User : null

    // 清洗数据
    // users = users?.map(v => ({
    //   username:v.username,
    //   password: v.password,
    //   level: 0
    // }))
    // localStorage.setItem('users', JSON.stringify(users))

    return {
      users,
      currentUser,
      isLogin: localStorage.getItem('isLogin') === 'true'
    }
  },
  actions: {
    // 登陆
    login(user: User) {
      this.isLogin = true
      this.currentUser = user
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isLogin', 'true')
    },
    //注册
    register(user: User) {
      const users = [...this.users, {
        ...user, level: 0 //初始化账号等级
      }]
      this.users = users
      localStorage.setItem('users', JSON.stringify(users))
    },
    //登出
    logout() {
      this.isLogin = false
      localStorage.removeItem('isLogin')
      localStorage.removeItem('user')
      this.currentUser = null
    },
    //修改密码
    updatePassword(password: string) {
      this.currentUser!.password = password
      this.users = this.users.map(u => ({
        ...u, password: u.username === this.currentUser?.username ? password : u.password
      }))

      localStorage.setItem('users', JSON.stringify(this.users))
      localStorage.setItem('user', JSON.stringify(this.currentUser))
    }
  }
})
