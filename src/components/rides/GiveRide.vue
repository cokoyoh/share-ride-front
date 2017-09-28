<template>
    <div class="book-ride">
        <top :text="text"></top>
        <div class="container">
          <div class="row">
              <div class="col-lg-6 col-md-6">
                  <div class="polaroid">
                      <img src="../../../src/images/background/add-ride-img.jpg" alt="">
                      <div class="container">
                          <h4>Add a Ride</h4>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-6">
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
                          <br>
                          <div class="form-group">
                              <div class="form-group has-success">
                                  <button
                                          v-show="userStore.auth_user !== null"
                                          class="btn btn-outline-success
                                    my-2 my-sm-0 btn-md btn-block">
                                      Add Ride
                                  </button>
                                  <p  class="give-ride"
                                      v-show="userStore.auth_user === null">
                                      Please login to be able to add a ride
                                  </p>
                              </div>
                          </div>
                      </fieldset>
                  </form>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import ContactTop from '../pages/ContactTop.vue'
    import {add_ride_url, get_header} from "../../global/config";
    import {mapState} from 'vuex'

    export default {
        data(){
            return {
                ride: {
                    origin: '',
                    destination: '',
                    capacity: '',
                    dor: ''
                },
                text: 'Add Ride Here'
            }
        },
        components: {
            'top': ContactTop,
        },
        computed: mapState({
            userStore:state => state.userStore
        }),
        methods: {
            onSubmit(){
                this.$validator.validateAll().then(() => {
                    let post_data = this.ride
                    this.$http.post(add_ride_url, post_data, {headers: get_header()})
                        .then(response => {
                            console.log(response)
                            if(response.status === 200){
                                swal(
                                    'Success',
                                    response.body.message,
                                    'success'
                                )
//                                this.ride = {}
//                                this.preventDefault()
                            }
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
    .book-ride p
        font-family: 'Lato', sans-serif
        color: red !important
    .book-ride .polaroid
        width: 80%
        background-color: white
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
        margin-bottom: 25px
    .book-ride img
        width: 100%
</style>