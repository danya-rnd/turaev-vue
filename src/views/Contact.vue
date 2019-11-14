<template>
  <div class="contact-page">
	<NavbarLight />	
	<div class="contact-page__wrapp content">
		<h1>Контакты</h1>
		<div class="content-page__content">
			<div class="contact-content">
				<h3>Москва</h3>
				<p class="text-description">АДРЕС ОФИСА</p>
				<p class="text-block">ул. Липовый Парк, 4, корп.1</p>
				<p class="text-block"><a href="tel:+79647604338">+7 964 760-43-38</a></p>
				<p class="text-description">ЭЛЕКТРОННАЯ ПОЧТА</p>
				<p class="text-block">tyraev.stroy@yps.ru</p>
			</div>
			<iframe src="https://yandex.ru/map-widget/v1/-/CGTefCmk" allowfullscreen="true"></iframe>
		</div>
	</div>
	<Footer />
  </div>
</template>
	
<script>
	
	import NavbarLight from '@/components/NavbarLight.vue';
	import Footer from '@/components/Footer.vue';

	export default {
		name: 'Contact',
		components: {
			NavbarLight,
			Footer
		},
	}

</script>

<style lang="sass">
	.contact-page
		background: #fff
		.content-page__content
			display: flex
			align-items: center
			justify-content: space-between
			flex-direction: row
			padding-bottom: 150px
			h3
				font-size: 24px
				line-height: 28px
			.text-description
				font-size: 14px
				line-height: 16px
				margin-top: 35px
			.text-block
				font-size: 24px
				line-height: 28px
				margin-top: 15px
				a
					text-decoration: none
					color: inherit
			iframe
				max-width: 600px
				height: 454px
				width: 100%
				border: none

</style>