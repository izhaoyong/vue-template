import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Bus from './common/bus.js'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.prototype.Bus = Bus;
Vue.use(iView);
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		feed: null
	},
	mutations: {}
})

window.vue = new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
})
