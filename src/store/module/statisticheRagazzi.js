import axios from 'axios';
import help from '../../help';

const state = () => ({
    presenzeRagazzo: {},
    nomeRagazzo: '',
    costoTot: ''
});
 
const getters = {
    allPresenzeRagazzo(state){
        return state.presenzeRagazzo;
    },

    getCostoTot(state){
        return state.costoTot;
    },

    getNomeRagazzo(state){
        return state.nomeRagazzo;
    }
};
 
const actions = {
    async fetchPresenzeRagazzo({commit}, payload){
        const response = await axios.post(`${help().linkstatistichepresenzeragazzi}`, {
            ragazzo: payload.ragazzo,
            mese: payload.mese,
            anno: payload.anno,
        });
        commit('fetchPresenzeRagazzo', response.data);
    },
};
 
const mutations = {
    fetchPresenzeRagazzo(state, payload){
        state.presenzeRagazzo = payload[0];
        state.costoTot = payload[1];
        state.nomeRagazzo = payload[2];
    },

};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}