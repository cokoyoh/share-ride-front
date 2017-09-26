import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '../components/pages/users/userStore'
import adminStore from '../components/pages/users/admin/adminStore'


Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        userStore,
        adminStore,
    },
    strict: debug
})