import { createRouter, createWebHashHistory } from 'vue-router'
import Intern from '../views/Intern.vue'
import Oprec from '../views/Oprec.vue'

const routes = [
  {
    path: '/',
    name: 'Intern',
    component: Intern
  },

  {
    path: '/oprec',
    name: 'Oprec',
    component: Oprec
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
