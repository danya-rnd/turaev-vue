<template>
  <div class="contact">
	<h1>{{ info }}</h1>
	<div v-for="project in info" :key="project._id">
		<p>{{ project.name }}</p>
		<img :src="project.projectImage" alt="">
	</div>	
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Contact',
		data() {
			return {
				info: null
			};
		},
		mounted() {
			axios
				.get('http://localhost:3000/projects')
				.then(response => (this.info = response.data.projects));
		}
	}

</script>

<style lang="sass">
	
</style>