import { createRouter, createWebHistory } from 'vue-router'
import Focus from '../views/Focus.vue'
import Normal from '../views/Normal.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    component: Normal
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/focus',
    name: 'Focus',
    component: Focus
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
