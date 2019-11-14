<template>
	<div class="about-page">
		<NavbarLight />	
		<div class="about-page__wrapp content">
		<h1>О компании</h1>
		<div class="about-page__content about-page__content_flex">
			<img src="@/assets/images/about-main.svg" alt="">
			<div class="about-page__text">
				<p>
					«АСТ» — это компания, начавшая свою деятельность в 2002 г., главной специализацией которой является малоэтажное загородноe строительство каркасных домов и деревянных коттеджей. Благодаря приобретенному опыту, мы осуществляем только высококачественноевозведение жилья в любом уголке Московской области.
				</p>
				<p>
					Мы предлагаем услуги по индивидуальному проектированию, строительству каркасных домов под ключ, жилья из керамзитобетонных, газосиликатных блоков, из бруса, из SIP панелей. На сайте «АСТ» Вы также всегда сможете изучить чертежи наших готовых проектов, просмотреть фото завершенных объектов.
				</p>
				<p>
					Для специалистов компании «АСТ» всегда в приоритете пожелания Заказчика, поэтому, если Вам понравился любой типовый проект с нашего сайта, мы готовы адаптировать его под Ваши требования, пожелания.
				</p>
				<p>
					Для строительства мы применяем только качественные, экологически безопасные материалы и проверенные технологии. Возведение любого объекта выполняется в точно указанные сроки, а клиент получает гарантии на проведенный комплекс работ.
				</p>
				<p>
					Мы можем подобрать для Вас типовой проект жилья, либо выполнить заказ по индивидуальному плану.
				</p>
				<button class="border__button border__button_black border__button_about">Посмотреть работы</button>
			</div>
		</div>
		<div class="about-page__content about-page__content_secondary">
			<h2>Принцип работы сервиса</h2>
			<img class="image" src="@/assets/images/about-service.svg" alt="">
		</div>
	</div>
		<Footer />
	</div>
</template>
	
<script>
	
	import NavbarLight from '@/components/NavbarLight.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		name: 'About',
		components: {
			NavbarLight,
			Footer
		},
	}

</script>

<style lang="sass">
	.about-page__content
		&_flex
			display: flex
			justify-content: space-between
			padding: 0 0 90px 0
		&_secondary
			display: flex
			flex-direction: column
			align-items: center	
			padding: 0 0 150px 0
		p
			margin-bottom: 20px
			font-size: 16px
			line-height: 19px
			max-width: 500px
		img
			width: 50%
			height: 50%
		h2
			font-size: 30px
			line-height: 38px
			text-align: center
	.image
		margin-top: 90px

</style>