import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/ToolsView.vue')
  },
  {
    path: '/others',
    name: 'others',
    component: () => import('../views/OthersView.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/MineView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
