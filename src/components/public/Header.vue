<template>
	<div class="header">
		<div class="h-left">
			<!-- <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 60px;"> -->
			<!-- <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item> -->
			<!-- <el-breadcrumb-item v-for="item in routeList" :key="item.id">{{item}}</el-breadcrumb-item> -->
			<!-- </el-breadcrumb> -->
		</div>
		<div class="h-right">
			<el-dropdown  size="large" type="primary">
				<span class="el-dropdown-link">
					admin,下午好<el-icon class="el-icon--right"><arrow-down /></el-icon>
				</span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>账号信息</el-dropdown-item>
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item>退出</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>
<script lang="ts" setup>

// export default{
// 	name:'Header',
// 	data(){
// 		return {
// 		}
// 	},
// 	computed:{
// 		routeList:function(){
// 			// return this.$route.name.split('/')
// 		}
// 	},
// 	methods:{
// 		getRoutePath(){
//       // this.realList = this.$route.meta.routeList;
//     }
// 	}
// }
</script>
<style scoped>
.el-menu--horizontal>.el-submenu {
	float: right;
}

.header {
	height: 60px;
	align-items: center;
	display: flex;
	/* border: 1px solid; */
}

.h-left {
	flex: 1;
}

.h-right {
	cursor: pointer;
	color: var(--el-color-primary);
}

.el-dropdown-link {
	cursor: pointer;
	color: var(--el-color-primary);
	display: flex;
	align-items: center;
}

span:focus-visible {
	outline: none;
}
</style>