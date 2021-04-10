import axios from 'axios';
import help from '../../help';

const state = () => ({
    viaggiVetture: {},
    Tot: ''
});
 
const getters = {
    allViaggiVettura(state){
        return state.viaggiVetture;
    },

    getTot(state){
        return state.Tot;
    },

};
 
const actions = {
    async fetchKmVetture({commit}, payload){
        //console.log(payload.mesi[0]);
        const response = await axios.post(`${help().linkchilometrivetture}`, {
            anno: payload.anno,
            vettura: payload.vettura,
            mesi: payload.mesi
        });
        commit('fetchKmVetture', response.data);
    },
};
 
const mutations = {
    fetchKmVetture(state, payload){
        //console.log(payload);
        state.viaggiVetture = payload[0];
        state.Tot = payload[1];
    },

    clearKm(state){
        state.viaggiVetture = {};
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