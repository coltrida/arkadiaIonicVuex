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

    async saveragazzo({commit}, payload){
        const response = await axios.post(`${help().linkinserisciragazzo}`, {
            nomeRagazzo: payload.nomeRagazzo,
            voucher: payload.voucher,
            scadenza: payload.scadenza
        });
        commit('saveragazzo', response.data);
    },

    async eliminaragazzo({commit}, id){
        await axios.delete(`${help().linkragazzi}/${id}`);
        commit('eliminaragazzo', id);
    },
};
 
const mutations = {
    fetchRagazzi(state, payload){
        state.ragazzi = payload;
    },

    saveragazzo(state, payload){
        state.ragazzi.unshift(payload);
    },

    eliminaragazzo(state, id){
        state.ragazzi = state.ragazzi.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}