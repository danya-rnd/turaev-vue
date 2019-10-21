<template>
	<div class="home">
		<Navbar />
		<MainSlider />
	</div>
</template>

<script>

	import Navbar from '@/components/Navbar.vue';
	import MainSlider from '@/components/MainSlider.vue'
	export default {
		name: 'home',
		components: {
			Navbar,
			MainSlider
		}
	}

</script>

<style lang="sass">

</style>
