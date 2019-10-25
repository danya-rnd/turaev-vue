<template>
	<div class="main_about">
		<div class="decor_lines"></div>
		<div class="content">
			<h2>Коротко о нас</h2>
			<div class="about-block">
				<img src="@/assets/images/shortly-about.svg" alt="">
				<div class="description">
					<p>Еще на стадии проектирования наши инженеры уделяют особое внимание мелочам - а именно ответственным узлам, и конструкциям с большими нагрузками, что обеспечивает нашим домам особую надежность и долговечность.</p>
					<p>Именно поэтому мы предоставить гарантию на наши дома до 15 лет.</p>
					<button class="border__button">Узнать больше</button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	
	export default {
		name: 'ShortlyAbout'
	}

</script>

<style lang="sass">
	.main_about
		position: relative
		padding: 99px 0 249px 0
		background: url('../assets/images/main-background.jpg')
		.content
			max-width: 954px
		.about-block
			display: flex
			justify-content: space-between
			align-items: center
			margin: 90px 0 0 0
		h2
			color: #fff
		.decor_lines
			position: absolute
			width: 36%
			height: 100%
			left: 7%
			top: 0
			&:after
				position: absolute
				content: ''
				width: 100%
				height: 1px
				background: #fff
				top: 18%
				opacity: .2
			&:before
				position: absolute
				content: ''
				height: 100%
				width: 1px
				background: #fff
				opacity: .2
				left: 46%
		p
			color: #fff
			max-width: 249px
			width: 100%
			margin: 49px 0
</style>