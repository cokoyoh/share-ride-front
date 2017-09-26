<template>
    <div class="header" id="header">
        <div class="container">
            <h2>Shareride Inc</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <b>
                Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem.
            </b> <br> <br>
            <router-link to="/rides">
                <button class="btn-clear btn btn-lg btn-default">Explore Available Rides</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass">
    .header
        padding: 50px 0 60px
        height: 500px
        width: 100%
        text-align: center
        background-image: url("../../../images/background/cars-bk-3.jpg")
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        .btn-clear
            background-color: transparent !important
            border: 2px solid #0099cc
            color: #fff
    .header h2
        font-family: 'Noto Sans', sans-serif
        font-size: 50px
        color: #fff

    .header p
        font-family: 'Lato', sans-serif
        font-size: 30px
        color: #fff
        text-align: center
    .header b
        color: #fff

</style>