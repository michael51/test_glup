import Vue from "vue";
import tpl from "./index.tpl";
import {} from "./index.scss";


/**
 * 全局注册组件只能通过JS定义，不能通过VUE文件。
 * @param data
 */
export default function (data) {
	Vue.component('my-component',{
		template: tpl,
		data: function () {
			return {
				data
			}
		}
	});
}