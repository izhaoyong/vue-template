import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const HomeRouter = [{
	path: '/',
	name: 'Home',
	component: Home
}]


const router = new Router({
	mode: 'history',
	base: '/soulink/op/',
	routes: [{
			path: '/login',
			name: 'Login',
			component: Login
		},
		HomeRouter
	]
})

import axios from '@/common/axios.js';
import request from '@/common/request.js';

router.beforeEach((to, from, next) => {})

export default router;
