import Vue from "vue";
import tpl from "./index.tpl";

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