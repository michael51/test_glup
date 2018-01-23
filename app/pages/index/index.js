import Vue from "vue";
import {} from "../common/header";
import MyComponents from "components/MyComponents";/*页面使用MyComponts组件*/

/*class Test {
	constructor(){
		this.a = 'hello233';
	}
}

let test = new Test();
console.info(test.a);*/

MyComponents({ name: 'Michael Ray'}); //给组件传递数据

let data = function () {
	return {
		classArr: ['class1','class2','class3']
	}
};

new Vue({
	el: "#app",
	data : data
});