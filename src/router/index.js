import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import Vetture from '../pages/Vetture.vue';
import Operatori from '../pages/Operatori.vue';
import Ragazzi from '../pages/Ragazzi.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vetture',
    name: 'Vetture',
    component: Vetture
  },
  {
    path: '/operatori',
    name: 'Operatori',
    component: Operatori
  },
  {
    path: '/ragazzi',
    name: 'Ragazzi',
    component: Ragazzi
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
