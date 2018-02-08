<template>
   <div class="hello-world">
      This is {{msg}}
   </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'hello world'
			}
		},
		created(){
			console.info('x');

			this.$http.post('http://127.0.0.6/json.php')
                .then(response => {
                   this.name = response.body.name;
                   console.info('response', response);
                   console.info('response.json', response.json);
			       })
                .catch(response => {
			   	  console.log('出错了',response)
			   })
                .then(function () {
                    console.info('x2');
				})
		},
	}
</script>

<style scoped="">
.hello-world{ color: #00FF00}
</style>