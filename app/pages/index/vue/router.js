import VueRouter from "VueRouter";
import Home from "./components/Home";

export default new VueRouter({
		routes: [
			{
				path: '/home',
				component: Home
			},
			{
				path: '/list',
				component: {
					template: '<h1>This is the List page{{$route.path}}</h1>'
				}
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