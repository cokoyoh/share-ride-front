<template>
    <div class="rides">
        <top :text="text"></top>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <available></available>
                </div>
                <div class="col-lg-4 col-md-4">
                    <book></book>
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
</style>