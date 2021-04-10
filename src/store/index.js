import {createStore} from 'vuex';
import CarsModule from './module/cars';
import UsersModule from './module/users';
import RagazziModule from './module/ragazzi';
import AttivitaModule from './module/attivita';
import ViaggiModule from './module/viaggi';
import StatisticheRagazziModule from './module/statisticheRagazzi';
import StatisticheOperatoriModule from './module/statisticheOperatori';
import StatisticheKmVettureModule from './module/statisticheKmVetture';
import StatisticheKmRagazzoModule from './module/statisticheKmRagazzo';

const store = createStore({
    modules:{
        cars:CarsModule,
        users:UsersModule,
        ragazzi:RagazziModule,
        attivita:AttivitaModule,
        viaggi:ViaggiModule,
        statisticheRagazzi:StatisticheRagazziModule,
        statisticheOperatori:StatisticheOperatoriModule,
        statisticheKmVetture:StatisticheKmVettureModule,
        statisticheKmRagazzo:StatisticheKmRagazzoModule,
    }
});

export default store;