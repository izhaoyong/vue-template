import Vue from 'vue'
import iView from 'iview';

Vue.use(iView);
let vue = new Vue();

class Util {
	constructor() {}

	getDay(startTime) {
		let currentTime = (new Date()).getTime();
		let duration = currentTime - startTime;
		return Math.floor(duration / 1000 / 60 / 60 / 24);
	}

	getDate(millseconds) {
		let time = new Date(millseconds);
		let year = time.getFullYear();
		let month = time.getMonth() + 1;
		let day = time.getDate();

		return `${day}-${month}-${year}`;
	}

	getDetailDate(millseconds) {
		let time = new Date(millseconds);
		let year = time.getFullYear();
		let month = time.getMonth() + 1;
		let day = time.getDate();

		let hours = time.getHours();
		let minutes = time.getMinutes();

		return `${year}-${month}-${day} ${hours}:${minutes}`;
	}

	showSuccess(text, duration) {
		vue.$Message.success({
			render: h => {
				return h('div', {
					style: "font-size: 50px;"
				}, [
					text
				])
			},
			duration: duration || 1
		});
	}

	showError(text, duration) {
		vue.$Message.error({
			render: h => {
				return h('div', {
					style: "font-size: 50px;"
				}, [
					text
				])
			},
			duration: duration || 1
		});
	}
}

export default new Util()
