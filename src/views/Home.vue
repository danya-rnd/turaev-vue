<template>
	<div class="home">
		<Navbar />
		<MainSlider />
		<Steps />
		<div class="projects">
			<h2>Проекты домов под ключ</h2>
			<div class="project-container">
				<Project v-for="item of info" v-bind:item="item" :key="item.id"/>
			</div>
			<div class="link">
				<router-link to="/projects">Посмотреть все проекты</router-link>
			</div>
		</div>
		<ShortlyAbout />
		<Footer />
	</div>
</template>

<script>

	import Navbar from '@/components/Navbar.vue';
	import Steps from '@/components/Steps.vue';
	import MainSlider from '@/components/MainSlider.vue';
	import Project from '@/components/Project.vue';
	import ShortlyAbout from '@/components/ShortlyAbout.vue';
	import Footer from '@/components/Footer.vue';

	import axios from 'axios';

	export default {
		name: 'home',
		components: {
			Navbar,
			MainSlider,
			Steps,
			Project,
			ShortlyAbout,
			Footer
		},
		data() {
			return {
				info: null
			};

		},
		mounted() {
			axios
				.get('http://94.250.251.234:3000/api/projects')
				.then(response => (this.info = response.data.projects));
			
		}
	}

</script>

<style lang="sass">
	.projects
		position: relative
		width: 1220px
		margin: 20px auto
		padding: 134px 0 88px 0
		h2
			text-align: center
			margin-bottom: 91px
		.project-container
			display: grid
			grid-template-columns: 1fr 1fr 1fr
			grid-template-rows: 1fr
			grid-gap: 58px
		.link
			display: flex
			justify-content: center
			padding: 91px 0 0 0
			a
				font-size: 20px
				line-height: 23px
				color: #1E1F23
				text-decoration: none
				border-bottom: 1px solid #1E1F23
</style>
