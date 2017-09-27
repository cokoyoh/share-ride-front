import Vue from 'vue'
import {get_available_rides_url} from "../../global/config";
const state = {
    available_rides: {}
}

const mutations = {
    SET_AVAILABLE_RIDES(state, available_rides){
        state.available_rides = available_rides
    }
}

const actions = {
    setAvailableRides:({commit},available_rides) => {
        return Vue.http.get(get_available_rides_url)
            .then(response => {
                console.log(response.body.data)
                commit('SET_AVAILABLE_RIDES', response.body.data)
            })
    }
}

export default {
    state, mutations, actions
}