import Vue from "vue";
import {} from "../../common/header";
import MyComponents from "components/MyComponents";/*页面使用MyComponts组件*/
import HelloWorld from "components/HelloWorld/index.vue";/*页面使用MyComponts组件*/
import VueMethods from "./vue/Methods";
import router from "./vue/Router";

require('./index.scss');

MyComponents({ name: 'Michael Ray'}); //给组件传递数据 【全局注册的】

let data = function () {
	return {
		classArr: ['class1','class2','class3','class4']
	}
};

let vm = new Vue({
	el: "#app",
	data : data,
	methods: VueMethods
});


let vm2 = new Vue({
	el: "#app2",
	components: {
		'hello-world': HelloWorld
	}
});

let vm_router = new Vue({
	el: "#app_router",
	data : data,
	router,
	methods: VueMethods
});

