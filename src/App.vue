<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

import { navigatorName } from "@/common/const";
import axios from '@/common/axios.js';
import request from '@/common/request.js';

export default {
	name: 'App',
	data(){
		return {
		}
	},

	computed: {
    },

	created(){
	},


	methods: {
	}
}
</script>

<style lang="scss" scoped>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	.menu{

	}
}
</style>
