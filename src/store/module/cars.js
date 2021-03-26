import axios from 'axios';
import help from '../../help';

const state = () => ({
    cars: []
});
 
const getters = {
    allcars(state){
        return state.cars.sort();
    },
};
 
const actions = {
    async fetchCars({commit}){
        const response = await axios.get(`${help().linkvetture}`);
        commit('fetchCars', response.data);
    },

    async savevettura({commit}, payload){
        const response = await axios.post(`${help().linkinseriscivettura}`, {
            nomevettura: payload
        });
        commit('savevettura', response.data);
    },

    async eliminavettura({commit}, id){
        await axios.delete(`${help().linkvetture}/${id}`);
        commit('eliminavettura', id);
    },
    
};
 
const mutations = {
    fetchCars(state, payload){
        state.cars = payload;
    },

    savevettura(state, payload){
        state.cars.unshift(payload);
    },

    eliminavettura(state, id){
        state.cars = state.cars.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
