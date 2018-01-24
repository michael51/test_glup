import VueRouter from "VueRouter";
import Home from "./Routers/Home/index";
import List from "./Routers/List";

export default new VueRouter({
		routes: [
			{
				path: '/home',
				component: Home
			},
			{
				path: '/list',
				component: List
			},
			{
				path: '',
				name: 'hehe',
				component: {
					template: '<h2>this is No.{{$route.params.id}}</h2>'//必须带html标签
				},
				beforeEnter: function (to, from, next) { //路由钩子
					console.info('beforeEnter', from);
					next();
				},
			}
		]
	}
);