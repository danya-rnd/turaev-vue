<template>
	<div class="navbar">
		<nav>
			<a href="/">
				<img src="@/assets/images/logo.svg" alt="">
			</a>
			<div class="menu-items">
				<a href="">Наши объекты</a>
				<a href="/contact">Контакты</a>
				<div class="burger-bar">
					<a href="">Меню</a>
					<div class="burger">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>

	export default {
		name: 'Navbar'
	}

</script>


<style lang="sass">

.navbar
	width: 100%
	height: auto
	padding: 25px 0 0 0
	box-sizing: border-box
	position: absolute
	width: 100%
	display: flex
	justify-content: center
	nav
		position: relative
		display: flex
		justify-content: space-between
		align-items: center
		max-width: 1635px
		box-sizing: border-box
		width: 100%
		padding: 0 20px
		margin: 0 auto
		z-index: 20
		a
			position: relative
			display: block
			text-decoration: none
			color: #fff
			cursor: pointer
			font-size: 16px
			line-height: 19px
		.menu-items
			position: relative
			display: flex
			justify-content: space-between
			max-width: 443px
			width: 100%
			.burger-bar
				display: flex
				align-items: center
			.burger
				outline: none
				width: 37px
				height: 22px
				transform: rotate(0deg)
				transition: .5s ease-in-out
				cursor: pointer
				z-index: 1000
				transition: .4s
				margin-left: 25px
				span
					display: block
					position: absolute
					margin: 0px
					height: 2px
					width: 100%
					background: #fff
					left: 0
					transform: rotate(0deg)
					transition: .25s ease-in-out
					&:nth-child(1)
						top: 2px
					&:nth-child(2)
						top: 10px
					&:nth-child(3)
						top: 10px
					&:nth-child(4)
						top: 18px
				&.open
					span
						&:nth-child(1)
							top: 12px
							width: 0%
							left: 50%
						&:nth-child(2)
							transform: rotate(45deg)
						&:nth-child(3)
							transform: rotate(-45deg)
						&:nth-child(4)
							top: 12px
							width: 0%
							left: 50%

</style>
