<template>
    <div class="home-page" id="home-page">
        <header-page></header-page>
        <snap></snap>
        <services></services>
    </div>
</template>

<script>
    import HeaderPage from './Header.vue'
    import Services from './Services.vue'
    import Snap from './SnapDetails.vue'

    export default {
        data() {
            return {}
        },
        components: {
            'header-page': HeaderPage,
            'services': Services,
            'snap': Snap,
        }

    }
</script>

<style lang="sass">
    .home-page  h2
            font-family: 'Noto Sans', sans-serif

    .home-page  p, h4, b
            font-family: 'Lato', sans-serif
</style>