import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/vueStand',
    name: 'vueStand',
    component: () => import('../views/page/vueStand.vue')
  },
  {
    path: '/vueElement',
    name: 'vueElement',
    component: () => import('../views/page/vueElement.vue')
  },
  {
    path: '/vueVant',
    name: 'vueVant',
    component: () => import('../views/page/vueVant.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
