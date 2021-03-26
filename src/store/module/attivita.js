import axios from 'axios';
import help from '../../help';

const state = () => ({
    activities: []
});
 
const getters = {
    allactivities(state){
        return state.activities.sort();
    },
};
 
const actions = {
    async fetchActivities({commit}){
        const response = await axios.get(`${help().linkattivita}`);
        commit('fetchActivities', response.data);
    },

    async saveactivity({commit}, payload){
        const response = await axios.post(`${help().linkinserisciattivita}`, {
            nomeAttivita: payload.nomeAttivita,
            tipo: payload.tipo,
            costo: payload.costo,
        });
        commit('saveactivity', response.data);
    },

    async eliminaactivity({commit}, id){
        await axios.delete(`${help().linkattivita}/${id}`);
        commit('eliminaactivity', id);
    },
    
};
 
const mutations = {
    fetchActivities(state, payload){
        state.activities = payload;
    },

    saveactivity(state, payload){
        state.activities.unshift(payload);
    },

    eliminaactivity(state, id){
        state.activities = state.activities.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}