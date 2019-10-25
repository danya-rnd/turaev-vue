<template>
	<div class="project-card">
		<a href="">
			<div class="project-photo">
				<img :src="item.projectImage" alt="">
			</div>
			<div class="project-description">
				<span class="project-description__mini">{{ item.description }}</span>
				<div class="project-description__bottom">
					<span class="project-description__name">{{ item.name }}</span>
					<span class="project-description__metres">{{ item.metres }}<sup>2</sup></span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>

	export default {
		props: ['item'],
		name: 'Project',
	}

</script>

<style lang="sass">
	.project-card
		position: relative
		max-width: 367px
		a
			display: block
			text-decoration: none
			color: #000
			width: 100%
			height: 100%
			&:hover
				.project-photo
					&:after
						content: ''
						position: absolute
						width: 100%
						height: 100%
						background: #fff
						opacity: .50
						z-index: 20
						left: 0
						top: 0
					&:before
						content: 'Все о проекте'
						position: absolute
						z-index: 30
						padding: 24px 59px
						background: #fff
						opacity: .59
						border-radius: 40px
						left: 50%
						top: 50%
						transform: translate(-50%, -50%)
						white-space: nowrap
						font-size: 18px
			.project-photo
				position: relative
				width: 100%
				height: 100%
				z-index: 10
				img
					width: 100%
					height: 100%
			.project-description
				padding-top: 19px
				.project-description__mini
					font-size: 14px
					line-height: 16px
				.project-description__bottom
					width: 100%
					display: flex
					justify-content: space-between
					.project-description__name, .project-description__metres
						font-size: 24px
						line-height: 28px
						padding-top: 19px
						sup
							font-size: 12px
</style>
