import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/anfrage',
    name: 'Anfrage',
    component: () => import(/* webpackChunkName: "about" */ '../components/tafel-form.vue')
  },
  {
    path: '/resourcen',
    name: 'Resourcen',
    component: () => import(/* webpackChunkName: "about" */ '../views/resourcen.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
