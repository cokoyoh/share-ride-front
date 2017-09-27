<template>
    <div class="available-rides" id="available-rides">
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-body">
                    <ul class="list-group">
                        <li class="no-border list-group-item">
                            <div class="row">
                                <div class="col-lg-4 col-md-4">Origin</div>
                                <div class="col-lg-4 col-md-4">Destination</div>
                                <div class="col-lg-2 col-md-2">Capacity</div>
                                <div class="col-lg-2 col-md-2">Book</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="list-group" v-for="ride in ridesStore.available_rides">
                <li class="list-group-item">
                   <div class="row">
                       <div class="col-lg-4 col-md-4">{{ride.origin}}</div>
                       <div class="col-lg-4 col-md-4">{{ride.destination}}</div>
                       <div class="col-lg-2 col-md-2">{{ride.capacity}}</div>
                       <div class="col-lg-2 col-md-2">
                           <div class="checkbox">
                               <label>
                                   <input type="checkbox">
                               </label>
                           </div>
                       </div>
                   </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: mapState({
            ridesStore:state => state.ridesStore
        }),
        created(){
            this.$store.dispatch('setAvailableRides')
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