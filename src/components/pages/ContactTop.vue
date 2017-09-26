<template>
    <div class="contact-top">
        <div class="container">
            <h4>{{text}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text'],
        data(){
            return {
                text: 'Send us a message'
            }
        }
    }
</script>

<style lang="sass">
    .contact-top
        height: 70px
        padding: 20px 0 20px
        margin-bottom: 30px
        background-image: url("../../images/background/snap-details.png")
        background-position: center
        background-repeat: no-repeat
        background-size: cover
    .contact-top h2
        font-family: 'Noto Sans', sans-serif
        font-size: 80px
        text-align: center
        color: #fff

    .contact-top p,h4
        font-family: 'Lato', sans-serif
        font-size: 30px
        text-align: center
        color: #fff

</style>