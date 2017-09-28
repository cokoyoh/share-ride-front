import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../components/pages/users/userStore'
import ridesStore from '../components/rides/ridesStore'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userStore,
        ridesStore,
    },
    strict: debug
})