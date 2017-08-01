<template>
	<h1 id="hello">{{ hello }}</h1>
</template>

<script>
	export default {
		data() {
			return {
				hello: 'hello vue!'
			}
		}
	}

</script>

<style scoped>
	/* scoped 表示只在当前模板对象中起着作用，对其他的h1不起作用 */
	
	h1 {
		color: red;
	}

</style>
