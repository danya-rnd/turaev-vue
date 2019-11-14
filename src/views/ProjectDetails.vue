<template>
    <div class="project-details-page">
        <NavbarLight />
        <div class="projects-page__wrapp content">

        </div>
        <Footer />
    </div>
</template>
<script>

    import NavbarLight from '@/components/NavbarLight.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'Projects',
        components: {
            NavbarLight,
            Footer
        },
    }
</script>
<style lang="sass">

</style>