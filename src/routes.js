import Vue from 'vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./components/pages/home-components/Home.vue'),
            name:'home',
        },
        {
            path: '/forgot-password',
            component: require('./components/reset_password/ForgotPassword.vue'),
            name:'forgot-password',
        },
        {
            path: '/reset-password/:token',
            component: require('./components/reset_password/ResetPassword.vue'),
            name:'reset-password',
        },
        {
            path: '/login',
            component: require('./components/auth/Login.vue'),
            name:'login',
        },
        {
            path: '/register',
            component: require('./components/auth/Register.vue'),
            name:'register',
        },
        {
            path: '/rides',
            component: require('./components/rides/Rides.vue'),
            name:'rides',
            meta: {
                requiresAuth: false ,
            }
        },
        {
            path: '/give-a-ride',
            component: require('./components/rides/GiveRide.vue'),
            name:'give-ride',
            meta: {
                requiresAuth: true ,
            }
        },
    ],
    mode: 'history',
})



/**
 * Auth guards here
 */
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user && auth_user.access_token){
            next()
        } else next('login')
    }
    next()
})

Vue.use(VueRouter)

export default router