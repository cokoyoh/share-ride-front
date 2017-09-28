<template>
    <div class="book-ride">
        <div class="container">
            <h4 class="give-ride">Give rides here</h4>
            <form class="form-horizontal" @submit.prevent="onSubmit">
                <fieldset>
                    <div class="form-group">
                        <div class="form-group has-success">
                            <label class="control-label" for="origin">Origin</label>
                            <input type="text"
                                   v-model="ride.origin"
                                   v-validate="'required'"
                                   class="form-control"
                                   id="origin" name="origin">
                            <span v-show="errors.has('origin')"
                                  class="help is-danger">{{ errors.first('origin')}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group has-success">
                            <label class="control-label" for="destination">Destination</label>
                            <input type="text"
                                   class="form-control"
                                   v-model="ride.destination"
                                   v-validate="'required'"
                                   id="destination" name="destination">
                            <span v-show="errors.has('destination')"
                                  class="help is-danger">{{ errors.first('destination')}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group has-success">
                            <label class="control-label" for="capacity">Capacity of Car</label>
                            <input type="number"
                                   class="form-control"
                                   v-model="ride.capacity"
                                   v-validate="'required|min_value:1'"
                                   id="capacity" name="capacity">
                            <span v-show="errors.has('capacity')"
                                  class="help is-danger">{{ errors.first('capacity')}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group has-success">
                            <label class="control-label" for="dor">Date of Ride</label>
                            <input type="date"
                                   class="form-control"
                                   v-model="ride.dor"
                                   data-vv-as="date"
                                   v-validate="'required'"
                                   id="dor" name="dor">
                            <span v-show="errors.has('dor')"
                                  class="help is-danger">{{ errors.first('dor')}}</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group has-success">
                            <button
                                    class="btn btn-outline-success
                                    my-2 my-sm-0 btn-md btn-block">
                                Add Ride
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
    import {add_ride_url, get_header} from "../../global/config";

    export default {
        data(){
            return {
                ride: {
                    origin: '',
                    destination: '',
                    capacity: '',
                    dor: ''
                }
            }
        },
        methods: {
            onSubmit(){
                this.$validator.validateAll().then(() => {
                    let post_data = this.ride
                    this.$http.post(add_ride_url, post_data, {headers: get_header()})
                        .then(response => {
                            console.log(response)
                        })
                        .catch(response => {
                            console.log(response)
                        })
                })
            }
        }
    }
</script>

<style lang="sass">
    .book-ride
        padding: 10px 0 10px
    .book-ride .give-ride
        color: #222222
        text-align: left
    .is-danger
        color: red
        font-size: 14px
</style>