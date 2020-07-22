import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movielist',
    name: 'movie-list',
    component: () => import('../views/MovieList.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie-detail',
    component: () => import('../views/Movie.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
