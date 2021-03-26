import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import Vetture from '../pages/vetture/Vetture.vue';
import AddOrUpdateVettura from '../pages/vetture/AddOrUpdateVettura.vue';
import Operatori from '../pages/operatori/Operatori.vue';
import Ragazzi from '../pages/ragazzi/Ragazzi.vue';
import AddOrUpdateRagazzo from '../pages/ragazzi/AddOrUpdateRagazzo.vue';
import Attivita from '../pages/attivita/Attivita.vue';
import AddOrUpdateAttivita from '../pages/attivita/AddOrUpdateAttivita.vue';
import PresenzeOperatore from '../pages/operatori/PresenzeOperatore.vue';
import AddPresenza from '../pages/operatori/AddPresenza.vue';

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
  {
    path: '/attivita',
    name: 'Attivita',
    component: Attivita
  },
  {
    path: '/add-or-update-vettura/:id',
    component: AddOrUpdateVettura
  },
  {
    path: '/add-or-update-ragazzo/:id',
    component: AddOrUpdateRagazzo
  },
  {
    path: '/add-or-update-attivita/:id',
    component: AddOrUpdateAttivita
  },
  {
    path: '/presenzeOperatore',
    component: PresenzeOperatore
  },
  {
    path: '/add-presenza',
    component: AddPresenza
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
