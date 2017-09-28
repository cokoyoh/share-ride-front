<template>
    <div class="rides">
        <top :text="text"></top>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="polaroid">
                        <img src="../../images/background/available.jpg" alt="Available">
                        <div class="container">
                            <h4>Get Available Rides</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8">
                    <available></available>
                </div>
                <div class="row">
                    <router-link to="give-a-ride"> <button class="add btn btn-sm btn-outline-success my-2 my-sm-0">Give Someone A Ride</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactTop from '../pages/ContactTop.vue'
    import AvailableRides from './AvailableRides.vue'
    import BookRides from './GiveRide.vue'
    export default {
        data() {
            return {
                text: 'Available Rides'
            }
        },
        components: {
            'top': ContactTop,
            'available': AvailableRides,
            'book': BookRides
        }
    }
</script>

<style lang="sass">
    .rides
        padding: 0 0 40px
    .rides img
        width: 100%
        /*height: 300px*/
    .rides .polaroid
        width: 80%
        background-color: white
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
        margin-bottom: 25px
    /*.rides h4,p*/
        /*color: #222222*/
    .rides .add
        margin-left: 28px
</style>