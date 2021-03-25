import {createStore} from 'vuex';
import CarsModule from './module/cars';
import UsersModule from './module/users';
import RagazziModule from './module/ragazzi';

const store = createStore({
    modules:{
        cars:CarsModule,
        users:UsersModule,
        ragazzi:RagazziModule,
    }
});

export default store;