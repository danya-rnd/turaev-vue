<template>
	<div class="navbar">
		<nav>
			<a href="/">
				<img src="@/assets/images/black-logo.svg" alt="">
			</a>
			<div class="menu-items">
				<a v-if="menu === false" class="menu-items__link" href="/projects">Наши объекты</a>
				<a v-if="menu === false" class="menu-items__link" href="/contact">Контакты</a>
				<div class="burger-bar" @click="toggleNav">
					<a v-if="nav === false">Меню</a>
					<a v-if="nav === true">Закрыть</a>
					<div class="burger" :class="{ open: nav }">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</nav>
		<Menu :class="{ active: menu }" />
	</div>
</template>

<script>
		
	import Menu from './Menu.vue'

	export default {
		name: 'NavbarLight',
		components: {
			Menu
		},
		data() {
			return {
				nav: false,
				menu: false
			}
		},
		methods: {
			toggleNav() {
				this.nav = !this.nav
				this.menu = !this.menu
				if ( this.menu === true ) {
					document.body.classList.add("modal-open")
				} else {
					document.body.classList.remove("modal-open");
				}
			}
		}
	}

</script>


<style lang="sass" scoped>

.navbar
	position: relative
	width: 100%
	height: auto
	padding: 25px 0
	box-sizing: border-box
	width: 100%
	display: flex
	background-color: #fff
	justify-content: center
	z-index: 1500
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
		z-index: 1500
		a
			position: relative
			display: block
			text-decoration: none
			color: #000
			cursor: pointer
			font-size: 16px
			line-height: 19px
		.menu-items
			position: relative
			display: flex
			justify-content: flex-end
			max-width: 443px
			width: 100%
			&__link
				margin-right: 37px
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
					background: #000
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
