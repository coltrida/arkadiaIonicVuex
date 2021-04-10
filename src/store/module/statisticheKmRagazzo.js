import axios from 'axios';
import help from '../../help';

const state = () => ({
    viaggiRagazzi: {},
    Tot: ''
});
 
const getters = {
    allViaggiRagazzo(state){
        return state.viaggiRagazzi;
    },

    getTot(state){
        return state.Tot;
    },

};
 
const actions = {
    async fetchKmRagazzi({commit}, payload){
        const response = await axios.post(`${help().linkchilometriragazzi}`, {
            anno: payload.anno,
            ragazzo: payload.ragazzo,
            mesi: payload.mesi
        });
        commit('fetchKmRagazzi', response.data);
    },
};
 
const mutations = {
    fetchKmRagazzi(state, payload){
        state.viaggiRagazzi = payload[0];
        state.Tot = payload[1];
    },

    clearKm(state){
        state.viaggiRagazzi = {};
        state.Tot = '';
    }

};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}