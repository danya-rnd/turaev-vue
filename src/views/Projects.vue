<template>
    <div class="projects-page">
        <NavbarLight />
        <div class="projects-page__wrapp content">
            <h1>Посмотрите на популярные объекты у наших клиентов</h1>
            <!-- <div class="projects-navbar">
                <a class="active">Дома</a>
                <a>Коттеджи</a>
                <a>Бани</a>
                <a>Садовые домики</a>
                <a>Другое</a>
            </div> -->
            <div class="projects-page__content">
                <Project v-for="item of info" v-bind:item="item" :key="item.id" />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
    import NavbarLight from '@/components/NavbarLight.vue';
    import Footer from '@/components/Footer.vue';
    import Project from '@/components/Project.vue';

    import { db } from '../main'

    export default {
        name: 'Projects',
        components: {
            NavbarLight,
            Footer,
            Project
        },
        data() {
            return {
                info: []
            };
        },
        firestore() {
            return {
                info: db.collection('project-cards'),
            }
        },
    }
</script>
<style lang="sass">
	.projects-page
		h1
			max-width: 730px
		.projects-navbar
			padding-bottom: 36px
			a
				color: #000
				text-decoration: none
				margin-right: 57px
				font-size: 18px
				line-height: 21px
				&.active
					text-decoration: underline
		.projects-page__content
			padding-bottom: 150px
			display: grid
			grid-template-columns: 1fr 1fr 1fr
			grid-template-rows: 1fr
			grid-gap: 58px
</style>