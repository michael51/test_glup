//import {} from './index.scss';

export default {
	beforeRouteEnter: function (to, from, next) {//组件内钩子
		console.info('xx23');
		next();
	}
};