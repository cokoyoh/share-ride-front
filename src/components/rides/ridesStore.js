import Vue from 'vue'
import {get_available_rides_url} from "../../global/config";
const state = {
    available_rides: {},
    selected_ride: null
}

const mutations = {
    SET_AVAILABLE_RIDES(state, available_rides){
        state.available_rides = available_rides
    },
    SET_SELECTED_RIDE(state, ride){
        state.selected_ride = ride
    }
}

const actions = {
    setAvailableRides:({commit},available_rides) => {
        return Vue.http.get(get_available_rides_url)
            .then(response => {
                console.log(response.body.data)
                commit('SET_AVAILABLE_RIDES', response.body.data)
            })
    },
    setSelectedRide: ({commit}, ride) => {
        let post_data = {id: ride.id}
        commit('SET_SELECTED_RIDE',ride)
    }
}

export default {
    state, mutations, actions
}