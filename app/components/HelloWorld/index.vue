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
		}
	}
</script>

<style scoped="">
.hello-world{ color: #00FF00}
</style>