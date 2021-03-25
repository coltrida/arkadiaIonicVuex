import axios from 'axios';
import help from '../../help';

const state = () => ({
    ragazzi: [],
});
 
const getters = {
    allragazzi(state){
        return state.ragazzi;
    },
};
 
const actions = {
    async fetchRagazzi({commit}){
        const response = await axios.get(`${help().linkragazzi}`);
        commit('fetchRagazzi', response.data);
    },
};
 
const mutations = {
    fetchRagazzi(state, payload){
        state.ragazzi = payload;
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}