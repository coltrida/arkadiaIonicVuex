import axios from 'axios';
import help from '../../help';

const state = () => ({
    settimanaAttuale: ''.toLocaleLowerCase,
    settimane: [],
    presenzeOperatore: {},
    Tot: ''
});
 
const getters = {
    allPresenzeOperatore(state){
        return state.presenzeOperatore;
    },

    getSettimanaAttuale(state){
        return state.settimanaAttuale;
    },

    getTot(state){
        return state.Tot;
    },

    getSettimane(state){
        return state.settimane;
    }
};
 
const actions = {
    async fetchPresenzeOperatore({commit}, payload){
        //console.log(payload.settimana.substring(0, 2).trim());
        const response = await axios.post(`${help().linkstatistichepresenzeoperatori}`, {
            settimana: payload.settimana.substring(0, 2).trim(),
            user: payload.user,
        });
        commit('fetchPresenzeOperatore', response.data);
    },

    async fetchSettimane({commit}){
        const response = await axios.get(help().linklistasettimane);
        commit('fetchSettimane', response.data);
    },

};
 
const mutations = {
    fetchPresenzeOperatore(state, payload){
        state.presenzeOperatore = payload[0];
        state.Tot = payload[1];
    },
    
    fetchSettimane(state, payload){
        state.settimane = payload[0];
         state.settimanaAttuale = Object.values(state.settimane).filter(u => u == '13 - dal:29/03/2021'); 
    },


};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}