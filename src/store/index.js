import {createStore} from 'vuex';
import CarsModule from './module/cars';
import UsersModule from './module/users';
import RagazziModule from './module/ragazzi';
import AttivitaModule from './module/attivita';
import ViaggiModule from './module/viaggi';

const store = createStore({
    modules:{
        cars:CarsModule,
        users:UsersModule,
        ragazzi:RagazziModule,
        attivita:AttivitaModule,
        viaggi:ViaggiModule,
    }
});

export default store;