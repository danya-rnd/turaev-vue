<template>
	<div class="project-details-page">
		<NavbarLight />
		<div class="project-page__wrapp content">
			<h1 class="title__h1 project-page__h1">{{ project.name }}</h1>
			<div class="project-page__content">
				<div class="project-slider__wrapp">
					<swiper class="project-slider" :options="swiperOption" ref="mySwiper">
						<swiper-slide v-for="picture of project.projectImages" :key="picture.id">
							<img :src="picture" alt="">
						</swiper-slide>
					</swiper>
					<div class="project-slider__prev">
						<svg class="arrow" width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.13072 16.2117L18.6301 28.4775C19.2914 28.9691 20.2302 28.4948 20.2267 27.6707L20.1223 2.99997C20.1188 2.17593 19.176 1.70953 18.5189 2.20675L2.12394 14.6117C1.59231 15.014 1.59569 15.814 2.13072 16.2117Z" stroke="white" stroke-width="2"/>
						</svg>
					</div>
					<div class="project-slider__next">
						<svg class="arrow" width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.728 16.061L3.33684 28.4657C2.67971 28.963 1.73688 28.4966 1.73339 27.6726L1.62899 3.00231C1.6255 2.17822 2.56436 1.70388 3.22567 2.1956L19.7213 14.4611C20.2562 14.8589 20.2596 15.6588 19.728 16.061Z" stroke="white" stroke-width="2"/>
						</svg>
					</div>
					<div class="project-slider__pagination swiper-pagination"></div>
				</div>
				<div class="project-page__info">
					<ul class="project-page__ul">
						<li class="project-page__elem">
							<span>Общая площадь</span>
							<span>{{ project.square }} м2</span>
						</li>
						<li class="project-page__elem">
							<span>Этажей</span>
							<span>{{ project.floars }} </span>
						</li>
						<li class="project-page__elem">
							<span>Площадь первого этажа</span>
							<span>{{ project.first }} м2</span>
						</li>
						<li class="project-page__elem">
							<span>Площадь второго этажа</span>
							<span>{{ project.second }} м2</span>
						</li>
						<li class="project-page__elem">
							<span>Площадь террасы, крыльца, балкона</span>
							<span>{{ project.terrassa }} м2</span>
						</li>
						<li class="project-page__elem">
							<span>Количество спален</span>
							<span>{{ project.bedroom }}</span>
						</li>
						<li class="project-page__elem">
							<span>Гараж</span>
							<span>{{ project.garage }}</span>
						</li>
					</ul>
					<button class="border__button border__button_black project-page__button">Хотите такой же?</button>
				</div>
			</div>
			<div class="project-page__description">
				<p class="project-page__desc">Описание</p>
				<p class="project-page__text">Во внешнем облике этого элитного коттеджа, построенного из клееного бруса, присутствуют формальные признаки функционализма – монолитный прямоугольный объём, плоская кровля, расположение окон в виде горизонтальных полос, опоры-столбы, оформляющие портал на главном фасаде. Аскетичности внешнего облика дома вторит и оформление интерьеров, отличающееся сдержанным минимализмом. В состав компактно скомпонованных внутренних помещений первого этажа входят не только гостевые комнаты, столовая-кухня и гостиная, но и SPA-комплекс с сауной, хамамом и бассейном. Из бассейна есть выход на террасу, где летом можно принимать солнечные ванны. На втором этаже расположены приватные помещения.</p>
			</div>
			<h2 class="projects__h2">Может заинтересовать</h2>
			<div class="projects__wrapp">
				<Project v-for="item of projects" v-bind:item="item" :key="item.id" />
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>

	import NavbarLight from '@/components/NavbarLight.vue';
	import Footer from '@/components/Footer.vue';
	import Project from '@/components/Project.vue';

	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	import { db } from '../main'

	export default {
		name: 'Projects',
		components: {
		NavbarLight,
		Footer,
		Project,
		swiper,
		swiperSlide
	},
	data() {
		return {
			project: [],
			projects: [],
			swiperOption: {
				speed: 1000,
				direction: 'horizontal',
				loop: true,
				autoplay: {
					delay: 3000
				},
				navigation: {
					nextEl: '.project-slider__next',
					prevEl: '.project-slider__prev'
				},
				touchRatio: 0,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				},
			}
		}
	},
	firestore() {
			return {
				project: db.collection('project-detail').doc(this.$route.params.id),
				projects: db.collection('project-cards')
			}
		}
	}
</script>

<style lang="sass">
	.projects__h2
		font-size: 20px
		line-height: 24px
		font-weight: 400
		text-align: center
		text-transform: uppercase
		margin: 61px 76px
	.projects__wrapp
		display: grid
		grid-template-columns: repeat(3, 3fr)
		grid-template-rows: 1fr
	.project-page
		&__description
			margin-top: 45px
		&__desc
			font-size: 18px
			line-height: 20px
			text-transform: uppercase
		&__text
			font-size: 16px
			line-height: 19px
			margin-top: 19px
		&__wrapp
			padding-bottom: 134px
		&__h1
			margin-top: 28px
		&__button
			margin: 109px auto 0
		&__content
			max-width: 1075px
			display: flex
			justify-content: space-between
			flex-direction: row
		&__ul
			list-style: none
			width: 100%
		&__info
			max-width: 334px
			width: 100%
			margin-top: 30px
		&__elem
			display: flex
			justify-content: space-between
			margin-bottom: 30px
			&:last-child
				margin-bottom: 0
			span
				&:first-child
					font-size: 14px
					line-height: 16px
				&:last-child
					font-size: 18px
					line-height: 21px
					font-weight: 500
	.project-slider
		position: relative
		width: 664px
		margin: 0
		&__pagination
			bottom: 60px
			.swiper-pagination-bullet
				width: 10px 
				height: 10px
				background: #C4C4C4 !important
				opacity: 1
				margin: 0 6px
			.swiper-pagination-bullet-active
				background: #fff !important
		&__wrapp
			position: relative
		&__next, &__prev
			outline: none
			position: absolute
			top: 50%
			transform: translateY(-50%)
			z-index: 20
			.arrow
				cursor: pointer
				transition: .4s
				fill: none
				&:hover
					fill: #fff
		&__next 
			right: 20px
		&__prev
			left: 20px
</style>