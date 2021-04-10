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
import Viaggi from '../pages/viaggi/Viaggi.vue';
import AddViaggio from '../pages/viaggi/AddViaggio.vue';
import Associa from '../pages/associa/Index.vue';
import ListaAssociaAttivitaRagazzo from '../pages/associa/attivitaragazzo/Lista.vue';
import AddAssociaAttivitaRagazzo from '../pages/associa/attivitaragazzo/Inserisci.vue';
import ListaAssociaOperatoreOre from '../pages/associa/operatoreore/Lista.vue';
import AssociaOperatoreOre from '../pages/associa/operatoreore/Inserisci.vue';
import PresenzeAttivita from '../pages/attivita/PresenzeAttivita.vue';
import AddPresenzaAttivita from '../pages/attivita/AddPresenzaAttivita.vue';
import Statistiche from '../pages/statistiche/Index.vue';
import StatistichePresenzeRagazzi from '../pages/statistiche/presenzeRagazzi/StatistichePresenzeRagazzi.vue';
import StatistichePresenzeOperatori from '../pages/statistiche/presenzeOperatori/StatistichePresenzeOperatori.vue';
import StatisticheKmVetture from '../pages/statistiche/kmVetture/StatisticheKmVetture.vue';
import StatisticheKmRagazzi from '../pages/statistiche/kmRagazzi/StatisticheKmRagazzi.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/vetture', name: 'Vetture', component: Vetture },
  { path: '/operatori', name: 'Operatori', component: Operatori },
  { path: '/ragazzi', name: 'Ragazzi', component: Ragazzi },
  { path: '/attivita', name: 'Attivita', component: Attivita },
  { path: '/add-or-update-vettura/:id', component: AddOrUpdateVettura },
  { path: '/add-or-update-ragazzo/:id', component: AddOrUpdateRagazzo },
  { path: '/add-or-update-attivita/:id', component: AddOrUpdateAttivita },
  { path: '/presenze-operatore', name: 'presenzeOperatore', component: PresenzeOperatore },
  { path: '/add-presenza', name: 'addPresenza', component: AddPresenza },
  { path: '/viaggi', name: 'viaggi', component: Viaggi },
  { path: '/add-viaggio', name: 'addViaggio', component: AddViaggio },
  { path: '/associa-e-log', name: 'AssociaLog', component: Associa },
  { path: '/attivita-ragazzo', name: 'AssociaAttivitaRagazzo', component: ListaAssociaAttivitaRagazzo },
  { path: '/add-associazione', name: 'AddAssociazione', component: AddAssociaAttivitaRagazzo },
  { path: '/operatore-ore', name: 'AssociaOperatoreOre', component: ListaAssociaOperatoreOre },
  { path: '/operatore-ore/:id', component: AssociaOperatoreOre },
  { path: '/presenze-attivita', component: PresenzeAttivita },
  { path: '/add-presenza-attivita', component: AddPresenzaAttivita },
  { path: '/statistiche', component: Statistiche },
  { path: '/statistiche-presenze-ragazzi', component: StatistichePresenzeRagazzi },
  { path: '/statistiche-presenze-operatori', component: StatistichePresenzeOperatori },
  { path: '/statistiche-km-vetture', component: StatisticheKmVetture },
  { path: '/statistiche-km-ragazzi', component: StatisticheKmRagazzi },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
