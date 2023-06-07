<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useMainStore()
const { users } = storeToRefs(store)

const username = ref('')
const password = ref('')

function login() {
	if (!username.value || !password.value) {
		return ElMessage.warning('请输入内容')
	}

	//注册
	if (route.path === '/register') {
		const [user] = users.value.filter(v => v.username === username.value)
		if (user) {
			ElMessage.warning('账号已存在')
		} else {
			store.register({
				username: username.value,
				password: password.value
			})
			router.push('/login')
			ElMessage.warning('注册成功，请登陆')
		}
		return
	}

	//登陆
	const [user] = users.value.filter(v => v.username === username.value)
	if (!user) {
		return ElMessage.error('账号不存在')
	}

	if (user && user.password !== password.value) {
		return ElMessage.error('密码错误')
	}

	if (user && user.password === password.value) {
		store.login(user)
		ElMessage.success('登陆成功')
		router.push('/account')
	}
}
</script>

<template>
	<div class="login">
		<h1>{{ route.path === '/login' ? '登陆' : '注册' }}</h1>
		<el-input class="mb2" v-model="username" placeholder="username" />
		<el-input @keyup.enter="login" class="mb2" v-model="password" placeholder="password" />
		<el-button @click="login">提交</el-button>
	</div>
</template>