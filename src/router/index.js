import { createRouter, createWebHistory, RouteConfig } from 'vue-router'
import jwtDecode from 'jwt-decode'
import store from '@/store'
import { loadView } from './routerUtils'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Forgot from '../views/Forgot.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  /* user */
  {
    path: '/user/login',
    component: Login,
    name: 'login',
    meta: { title: 'Login', partialType: 'full' },
  },
  {
    path: '/user/signup',
    component: Signup,
    name: 'signup',
    meta: { title: 'Signup', partialType: 'full' },
  },
  {
    path: '/user/forgot',
    component: Forgot,
    name: 'forgot',
    meta: { title: 'Forgot', partialType: 'full' },
  },
  /* test dashboard */
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: { title: 'Dashboard', requiresAuth: true, partialType: 'account' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: loadView('NotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // To set the title of each route
  document.title = to.meta.title

  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (accessToken != null && refreshToken != null) {
    //const decoded = jwtDecode(accessToken) //   const decoded: JwtDecodeData = jwtDecode(accessToken);
    //store.commit('user/SET_USER', decoded.data)
    next()
  }
  // double user becouse reactivity in vue 3 work with proxy
  if (to.meta.requiresAuth && !store.state.user.user.id) {
    next({ name: 'login' })
  }
  return next()
})

export default router
