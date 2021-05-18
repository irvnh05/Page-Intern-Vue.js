import { createRouter, createWebHashHistory } from 'vue-router'
import Intern from '../views/Intern.vue'

const routes = [
  {
    path: '/',
    name: 'Intern',
    component: Intern
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
