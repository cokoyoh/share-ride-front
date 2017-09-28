<template>
    <div class="available-rides" id="available-rides">
        <div class="container">
            <table class="table table-striped table-hover ">
                <thead>
                <tr>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Capacity</th>
                    <th>Book</th>
                </tr>
                </thead>
                <tbody>
                <tr
                        v-for="ride in ridesStore.available_rides">
                    <td>{{ride.origin}}</td>
                    <td>{{ride.destination}}</td>
                    <td>{{ride.capacity}}</td>
                    <td>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"
                                       @click="selectedRide(ride)"
                                       data-toggle="tooltip"
                                       title="Click here to book"
                                       v-show="userStore.auth_user !== null">
                                <input type="checkbox"
                                       v-show="userStore.auth_user === null"
                                       disabled
                                       data-toggle="tooltip"
                                       title="Login to book!">
                            </label>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import userStore from "../pages/users/userStore";
    import {book_ride_url, get_header} from "../../global/config";
    export default {
        computed: mapState({
            ridesStore:state => state.ridesStore,
            userStore:state => state.userStore
        }),
        created(){
            this.$store.dispatch('setAvailableRides')
        },
        methods: {
            selectedRide(ride){
                this.$store.dispatch('setSelectedRide', ride)
                let post_data = {
                    id: ride.id,
                }
                console.log(post_data)
                this.$http.post(book_ride_url, post_data, {headers: get_header()})
                    .then(response => {
                        console.log(response)
                    })
                    .catch(response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="sass">
    .available-rides
        padding: 0 0 10px
        margin-top: 10px
    .available-rides h2
        color: #222222
    .available-rides ul>li
        color: #222222
        height: 40px
        text-align: left
        margin: 10px
    .available-rides .no-border
        border-style: none
</style>