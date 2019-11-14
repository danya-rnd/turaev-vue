<template>
	<footer>
		<div class="footer-content">
			<div class="logo-block">
				<img src="@/assets/images/logo.svg" alt="">
				<p>Наша компания занимается строительством домов под ключ в городе Москва и в Московской области. Предлагаем Вам выгодную цену, качественные материалы, обоснованный подход к делу и гарантию на наши дома.</p>
			</div>
			<div class="info-block">
				<h3>Информация</h3>
				<ul>
					<li><a href="/projects">Наши объекты</a></li>
					<li><a href="/about">О компании</a></li>
					<li><a href="/contact">Контакты</a></li>
					<li><a href="">Политика конфиденциальности</a></li>
					<li><a href="">Пользовательское соглашение</a></li>
				</ul>
			</div>
			<div class="info-block">
				<h3>Контакты</h3>
				<ul class="contact">
					<li><img src="@/assets/images/icons/map.svg" alt=""><span>Москва</span></li>
					<li><img src="@/assets/images/icons/placeholder-footer.svg" alt=""><span>ул. Липовый Парк, 4, корп.1</span></li>
					<li><img src="@/assets/images/icons/recall-icon.svg" alt=""><a href="tel:+79647604338">+7 964 760-43-38</a></li>
					<li><img src="@/assets/images/icons/mail.svg" alt=""><a href="">tyraev.stroy@yps.ru</a></li>
				</ul>
			</div>
		</div>
		<div class="white-line"></div>
		<div class="footer-content footer-content__bottom">
			<div class="footer-content-left">
				<p>Вся информация на сайте носит информационный характер и не является публичной офертой.</p>
				<p>Строительство домов под ключ - ИП Тураев А. А.</p>
			</div>
			<div class="footer-content-right">
				<a href="">Создание сайтов - Веб-Студия ZSava</a>
			</div>
		</div>
	</footer>
</template>

<script>
	
	export default {
		name: 'Footer'
	}

</script>

<style lang="sass">
	footer
		position: relative
		width: 100%
		padding: 71px 0 31px 0
		background: #1E1F23
		.footer-content
			display: flex
			justify-content: space-between
			max-width: 1589px
			padding: 0 20px
			width: 100%
			margin: 0 auto
			// padding: 0 0 54px 0
			.logo-block
				max-width: 481px
				width: 100%
				p
					color: #fff
					margin: 70px 0 0 0
			.info-block
				color: #fff
				h3
					font-size: 24px
					line-height: 28px
					font-weight: 500
				ul
					list-style: none
					margin: 24px 0
					li
						margin: 12px 0
						a, span
							text-decoration: none
							color: #fff
							font-size: 16px
							line-height: 19px
				ul.contact li
					display: flex
					align-items: center
					img
						margin-right: 12px
		.footer-content__bottom
			display: flex
			align-items: center
			p
				color: #fff
				margin: 9px 0
				font-weight: 700
				&:nth-child(1)
					font-size: 14px
					line-height: 17px
				&:nth-child(2)
					font-size: 18px
					line-height: 22px
			a
				text-decoration: none
				color: #fff
				font-weight: bold
				font-size: 18px
				line-height: 22px
		.white-line
			width: 100%
			height: 1px
			background: #fff
			margin: 54px 0 31px 0
			opacity: .5


</style>