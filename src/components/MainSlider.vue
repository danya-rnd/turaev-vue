<template>
	<div class="swiper">
		<swiper class="main-slider" :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="slide of slides" v-bind:key="slide.name" class="slide">
				<img :src="slide.photo">
				<div class="content">
					<h1>{{ slide.name }}</h1>
					<p>{{ slide.description }}</p>
					<button class="border__button">Посмотреть работы</button>
				</div>
				<div class="swiper-nav">
					<div class="swiper-prev">
						<svg class="arrow" width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.13072 16.2117L18.6301 28.4775C19.2914 28.9691 20.2302 28.4948 20.2267 27.6707L20.1223 2.99997C20.1188 2.17593 19.176 1.70953 18.5189 2.20675L2.12394 14.6117C1.59231 15.014 1.59569 15.814 2.13072 16.2117Z" stroke="white" stroke-width="2"/>
						</svg>
					</div>
					<div class="swiper-next">
						<svg class="arrow" width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.728 16.061L3.33684 28.4657C2.67971 28.963 1.73688 28.4966 1.73339 27.6726L1.62899 3.00231C1.6255 2.17822 2.56436 1.70388 3.22567 2.1956L19.7213 14.4611C20.2562 14.8589 20.2596 15.6588 19.728 16.061Z" stroke="white" stroke-width="2"/>
						</svg>
					</div>
				</div>

			</swiper-slide>
		</swiper>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'MainSlider',
		components: {
			swiper,
			swiperSlide
		},
    data() {
      return {
				slides: [
					{
						name: 'Строительство домов под ключ',
						photo: require('@/assets/images/slider/house-slide.png'),
						description: 'Создадим незабываемый образ вашего жилища'
					},
					{
						name: 'Благоустройство вашего сада и участков',
						photo: require('@/assets/images/slider/garden-slide.png'),
						description: 'Создадим незабываемый образ вашего жилища'
					},
					{
						name: 'Техническое обслуживание домов',
						photo: require('@/assets/images/slider/technique-slide.png'),
						description: 'Создадим незабываемый образ вашего жилища'
					}
				],
        swiperOption: {
          speed: 1000,
					direction: 'horizontal',
					loop: true,
					autoplay: {
						delay: 3000
					},
					navigation: {
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev'
					},
					touchRatio: 0,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
					},
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
	}

</script>

<style lang="sass">

.main-slider
	position: relative
	width: 100%
	.slide
		position: relative
		width: 100%
		height: 100vh
		img
			position: absolute
			width: 100%
			height: 100%
		.content
			padding-top: 230px
			h1
				max-width: 749px
				width: 100%
				font-style: normal
				font-weight: 600
				font-size: 100px
				line-height: 119px
				color: #fff
			p
				font-size: 24px
				line-height: 28px
				color: #fff
				max-width: 363px
				width: 100%
				margin: 55px 0
.swiper-nav
	position: absolute
	top: 300px
	width: auto
	height: auto
	z-index: 100
	display: flex
	right: 23%
	top: 56%
	width: 90px
	justify-content: space-between
	.swiper-next, .swiper-prev
		outline: none
	.arrow
		cursor: pointer
		transition: .4s
		fill: none
		&:hover
			fill: #fff
.swiper-pagination
	position: absolute
	left: 50%
	transform: translateX(-50%)
	bottom: 100px
	.swiper-pagination-bullet
		width: 18px 
		height: 18px
		background: #fff !important
		margin: 0 6px
</style>
