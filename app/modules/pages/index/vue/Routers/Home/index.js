require('./index.scss');

let template = `
	<h1 class="home">This is the home page  </h1>
`;

export default {
	template : template,
	beforeRouteEnter: function (to, from, next) {//组件内钩子
		console.info('xx');
		next();
	}
};