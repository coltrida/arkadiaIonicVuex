import axios from 'axios';
import help from '../../help';

const state = () => ({
    cars: []
});
 
const getters = {
    allcars(state){
        return state.cars;
    },
};
 
const actions = {
    async fetchCars({commit}){
        const response = await axios.get(`${help().linkvetture}`);
        commit('fetchCars', response.data);
    },
};
 
const mutations = {
    fetchCars(state, payload){
        state.cars = payload;
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
