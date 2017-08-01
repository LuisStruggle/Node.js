import Vue from 'vue';
import App from './App.vue';
import Hello from './Hello.vue';
const jsTest = require('./jsTest.js');

new Vue({
	el: '#app',
	render: h => h(App)
});

new Vue({
	el: '#hello',
	render: h => h(Hello)
});

document.getElementById("buttonDJ").onclick = function (event) {
	console.log(event.type); //事件类型
	jsTest.hello();
};
