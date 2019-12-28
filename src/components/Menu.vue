<template>
	<div class="menu">
		<div class="menu__wrapp">
			<div class="menu__links">
				<ul class="menu__navbar">
					<li class="menu__elements">
						<a href="/">Главная</a>
					</li>
					<li class="menu__elements">
						<a href="/projects">Наши объекты</a>
					</li>
					<li class="menu__elements">
						<ul class="menu__subnavbar">
							<li class="menu__subelement">
								<a href="">Премиум</a>
							</li>
							<li class="menu__subelement">
								<a href="">Люкс</a>
							</li>
							<li class="menu__subelement">
								<a href="">Голд</a>
							</li>
						</ul>
					</li>
					<li class="menu__elements">
						<a href="/contact">Контакты</a>
					</li>
					<li class="menu__elements">
						<a href="/about">О компании</a>
					</li>
				</ul>
				<div class="menu__contact">
					<p class="menu__header">Контактная информация:</p>
					<a class="menu__link"><img src="@/assets/images/icons/black-envelope.svg" alt="">tyraev.stroy@yps.ru</a>
					<a class="menu__link" href="tel:+79647604338"><img src="@/assets/images/icons/black-call.svg" alt="">+7 964 760-43-38</a>
				</div>
			</div>
			<div class="menu__photo">
				<img src="@/assets/images/menu.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Menu'
	}

</script>


<style lang="sass">
	.menu
		position: fixed
		top: 0
		left: 0
		width: 100%
		overflow-y: scroll
		min-height: 100%
		height: 100%
		background: #fff
		z-index: 1000
		display: none
		&.active
			display: block
		&__wrapp
			padding: 258px 20px 220px 20px
			max-width: 1565px
			margin: 0 auto
			width: 100%
			display: flex
			justify-content: space-between
			flex-direction: row
			box-sizing: border-box
		&__navbar
			list-style: none
		&__elements
			margin-bottom: 47px
			font-size: 30px
			line-height: 35px
			font-weight: 500
			&:last-child
				margin-bottom: 0
			a
				text-decoration: none
				color: #000
				text-transform: uppercase
		&__subnavbar
			list-style: none
			padding-left: 33px
		&__subelement
			font-weight: 400
			font-size: 28px
			line-height: 32px
			margin-bottom: 9px
			&:last-child
				margin-bottom: 0
			a
				text-transform: capitalize !important
		&__contact
			margin-top: 138px
		&__header
			margin: 0 0 13px 0
			font-size: 18px
			line-height: 21px
		&__link
			display: flex
			flex-direction: row
			margin-bottom: 7px
			text-decoration: none
			color: #000
			font-size: 18px
			line-height: 21px
			&:last-child
				margin-bottom: 0
			img
				margin-right: 15px



</style>
