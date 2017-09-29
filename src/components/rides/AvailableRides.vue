<template>
    <div class="available-rides" id="available-rides">
        <div class="container">
            <table class="table table-striped table-hover " >
                <thead>
                <tr>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Capacity</th>
                    <th>Book</th>
                </tr>
                </thead>
                <tbody>
                <tr     @click="selectedRide(ride)"
                        v-for="ride in ridesStore.available_rides">
                    <td>{{ride.origin}}</td>
                    <td>{{ride.destination}}</td>
                    <td>{{ride.capacity}}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-success my-2 my-sm-0"
                                type="submit"
                                v-show="userStore.auth_user !== null">
                         Click to Book
                        </button>
                        <button class="btn btn-sm btn-outline-success my-2 my-sm-0"
                                type="submit"
                                data-toggle="tooltip"
                                title="Login to book!"
                                disabled
                                v-show="userStore.auth_user === null">
                            Click to Book
                        </button>
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
    import ridesStore from "./ridesStore";

    export default {
        computed: mapState({
            ridesStore: state => state.ridesStore,
            userStore: state => state.userStore
        }),
        created() {
            this.$store.dispatch('setAvailableRides')
        },
        methods: {
            selectedRide(ride) {
                this.$store.dispatch('setSelectedRide', ride)
                let post_data = {
                    id: this.ridesStore.selected_ride.id
                }
                if(this.userStore.auth_user.id !== this.ridesStore.selected_ride.driver_id){
                    this.$http.post(book_ride_url, post_data, {headers: get_header()})
                        .then(response => {
                            console.log(response)
                            if(response.status === 200){
                                swal(
                                    'Success',
                                    response.body.message,
                                    'success'
                                )
                            }
                        })
                        .catch(response => {
                            console.log(response, 'driver id = ', this.ridesStore.selected_ride.driver_id)
                        })
                } else {
                    swal('Invalid Operation', 'You cannot book your own ride!', 'error')
                }
            },
        }
    }
</script>

<style lang="sass">
    .available-rides
        padding: 0 0 10px
        margin-top: 10px
        .available-rides h2
            color: #222222
        .available-rides ul > li
            color: #222222
            height: 40px
            text-align: left
            margin: 10px
        .available-rides .no-border
            border-style: none
</style>