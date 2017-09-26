<template>
    <div class="class">
        <top :text="text"></top>
        <div class="container">
            <h2>Rides here</h2>
        </div>
    </div>
</template>

<script>
    import ContactTop from './ContactTop.vue'
    export default {
        data() {
            return {
                text: 'Available Rides'
            }
        },
        components: {
            'top': ContactTop
        }
    }
</script>

<style>

</style>