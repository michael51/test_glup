require('./index.scss');

let template = `
	<h1 class="list"><h1>This is the List page{{$route.path}}</h1>
`;

export default {
	template : template,
	beforeRouteEnter: function (to, from, next) {//组件内钩子
		console.info('xx');
		next();
	}
};