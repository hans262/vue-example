<script lang="ts" setup>
import Nav from './public/Nav.vue'
import Header from './public/Header.vue'

import { ref, onMounted } from 'vue'

// 响应式状态
const asideHeight = ref(window.innerHeight-60)

// 用来修改状态、触发更新的函数
// function increment() {
//   count.value++
// }

// 生命周期钩子
onMounted(() => {
  // console.log(`The initial count is ${count.value}.`)
	window.addEventListener('resize',()=>{
			asideHeight.value=window.innerHeight-60
		})
})


</script>
<style scoped>
	.el-header{padding: 0;}
	.el-aside{
		background-color: #D3DCE6;
	}
	.el-main{
		background-color: #E9EEF3;
		padding: 10px;
	}
	.el-scrollbar__wrap{overflow-x: hidden;}
</style>

<template>
	<el-container>
	  <el-header><Header/></el-header>
	  <el-container>
	    <el-aside width="200px" :style="{height:asideHeight+'px'}">
	    	<el-scrollbar style="height: 100%;"><Nav/></el-scrollbar>
	    </el-aside>
	    <el-main>
	    	<transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
	    		<router-view></router-view>
	    	</transition>
	    </el-main>
	  </el-container>
	</el-container>
</template>

