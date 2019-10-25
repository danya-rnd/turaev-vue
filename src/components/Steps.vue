<template>
	<div class="steps">
		<div class="decor_lines"></div>
		<div class="container-fluid">
			<h2>6 шагов к вашему новому дому</h2>
			<div class="steps_array">
				<div class="step" v-for="step of steps" v-bind:key="step.name">
					<div class="number">
						<span>{{ step.number }}</span>
					</div>
					<div class="info_block">
						<img :src="step.image" alt="">
						<div class="info_block_content">
							<span>{{ step.name }}</span>
							<p>{{ step.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Steps',
		data() {
			return {
				steps: [
					{
						number: '01',
						image: require('@/assets/images/icons/chat.svg'),
						name: 'Заявка на сайте',
						description: 'Вы оставляете заявку на сайте или звоните нам +7 123 123-12-12'

					},
					{
						number: '02',
						image: require('@/assets/images/icons/phone-call.svg'),
						name: 'Звонок менджера',
						description: 'Мы связываемся с вами для уточнения деталей проекта'

					},
					{
						number: '03',
						image: require('@/assets/images/icons/placeholder.svg'),
						name: 'Личная встреча',
						description: 'Со специалистом в нашем офисе или у вас на участке'

					},
					{
						number: '04',
						image: require('@/assets/images/icons/text-document.svg'),
						name: 'Договор',
						description: 'Заключаем договор с четко указанными сроками и планами'

					},
					{
						number: '05',
						image: require('@/assets/images/icons/settings.svg'),
						name: 'Строительство',
						description: 'Наша бригада начинает строительство Вашего дома по плану'

					},
					{
						number: '06',
						image: require('@/assets/images/icons/house.svg'),
						name: 'Сдача работы',
						description: 'Вы принимаете свой новый дом после строительства'

					},

					
				]
			}
		}
	}

</script>

<style lang="sass">
	.steps
		position: relative
		width: 100%
		height: auto
		padding: 109px 0 329px 0
		background: #1E1F23
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
				height: .5px
				background: #fff
				top: 18%
				opacity: .2
			&:before
				position: absolute
				content: ''
				height: 100%
				width: .5px
				background: #fff
				opacity: .2
				left: 46%
		.steps_array
			display: flex
			flex-direction: row
			flex-wrap: wrap
			position: relative
			width: 100%
			height: auto
			.step		
				display: flex
				position: relative
				width: 33%
				height: 176px
				box-sizing: border-box
				padding: 0 25px
				margin: 70px 0
				.number
					position: absolute
					font-size: 170px
					font-weight: bold
					opacity: .1
					top: 0
					left: 0
				.info_block
					position: relative
					display: flex
					width: 100%
					justify-content: space-between
					align-self: flex-end
					img
						margin-right: 16px
					.info_block_content span
						font-weight: bold
						font-size: 14px
						text-transform: uppercase
						line-height: 17px
					.info_block_content 
						font-size: 14px
						line-height: 17px
						font-weight: 400
						padding: 8px
</style>