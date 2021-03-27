import axios from 'axios';
import help from '../../help';

const state = () => ({
    viaggi: [],
});
 
const getters = {
    allviaggi(state){
        return state.viaggi;
    },
};
 
const actions = {
    async fetchViaggi({commit}){
        const response = await axios.get(`${help().linkchilometri}`);
        commit('fetchViaggi', response.data);
    },

    async saveviaggio({commit}, payload){
        const response = await axios.post(`${help().linkinseriscichilometri}`, {
            nomeRagazzo: payload.nomeRagazzo,
            voucher: payload.voucher,
            scadenza: payload.scadenza
        });
        commit('saveviaggio', response.data);
    },

    async eliminaviaggio({commit}, id){
        await axios.delete(`${help().linkchilometri}/${id}`);
        commit('eliminaviaggio', id);
    },
};
 
const mutations = {
    fetchViaggi(state, payload){
        state.viaggi = payload;
    },

    saveviaggio(state, payload){
        state.viaggi.unshift(payload);
    },

    eliminaviaggio(state, id){
        state.viaggi = state.viaggi.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}