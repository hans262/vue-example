<script setup lang="ts">
import { useStore } from 'vuex'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useStore()
const username = ref('')
const password = ref('')

function login() {
	if (!username.value || !password.value) {
		return ElMessage.warning('请输入内容')
	}

	//注册
	if (route.path === '/register') {
		const n = store.state.users.filter(v => v.username === username.value)
		if (n.length > 0) {
			ElMessage.warning('账户已存在')
		} else {
			store.commit('register', {
				username: username.value,
				password: password.value
			})
			router.push('/login')
			ElMessage.warning('注册成功，请登陆')
		}
		return
	}

	//登陆
	const [user] = store.state.users.filter(v => v.username === username.value)
	if (!user) {
		return ElMessage.error('账号不存在')
	}

	if (user && user.password !== password.value) {
		return ElMessage.error('密码错误')
	}

	if (user && user.password === password.value) {
		store.commit('login', user)
		ElMessage.success('登陆成功')
		router.push('/account')
	}
}
</script>

<template>
	<div class="login">
		<h1>{{ route.path === '/login' ? '登陆' : '注册' }}</h1>
		<el-input class="mb" v-model="username" placeholder="username" />
		<el-input @keyup.enter="login" class="mb" v-model="password" placeholder="password" />
		<el-button @click="login">提交</el-button>
	</div>
</template>
<style scoped>
.mb {
	margin-bottom: 20px;
}
</style>