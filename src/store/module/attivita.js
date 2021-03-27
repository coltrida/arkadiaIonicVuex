import axios from 'axios';
import help from '../../help';

const state = () => ({
    activities: [],
    activitiesragazziassociazioni: [],
    presenzeattivitaragazzi: [],
});
 
const getters = {
    allactivities(state){
        return state.activities.sort();
    },
    allactivitiesragazziassociazioni(state){
        return state.activitiesragazziassociazioni.sort();
    },
    allpresenzeattivitaragazzi(state){
        return state.presenzeattivitaragazzi.sort();
    },
};
 
const actions = {
    async fetchActivities({commit}){
        const response = await axios.get(`${help().linkattivita}`);
        commit('fetchActivities', response.data);
    },

    async fetchActivitiesRagazzi({commit}){
        const response = await axios.get(`${help().linkassociazioni}`);
        commit('fetchActivitiesRagazzi', response.data);
    },

    async fetchPresenzeAttivitaRagazzi({commit}){
        const response = await axios.get(`${help().linkattivitacliente}`);
        commit('fetchPresenzeAttivitaRagazzi', response.data);
    },

    async saveactivity({commit}, payload){
        const response = await axios.post(`${help().linkinserisciattivita}`, {
            nomeAttivita: payload.nomeAttivita,
            tipo: payload.tipo,
            costo: payload.costo,
        });
        commit('saveactivity', response.data);
    },

    async saveassociazioneactivityragazzo({commit}, payload){
        const response = await axios.post(`${help().linkassociaattivitacliente}`, {
            attivita: payload.attivita,
            raga: payload.raga,
        });
        commit('saveassociazioneactivityragazzo', response.data);
    },

    async eliminaactivity({commit}, id){
        await axios.delete(`${help().linkattivita}/${id}`);
        commit('eliminaactivity', id);
    },

    async eliminaassociazione({commit}, id){
        await axios.delete(`${help().linkassociazioni}/${id}`);
        commit('eliminaassociazione', id);
    },
    
};
 
const mutations = {
    fetchActivities(state, payload){
        state.activities = payload;
    },

    fetchActivitiesRagazzi(state, payload){
        state.activitiesragazziassociazioni = payload;
    },

    fetchPresenzeAttivitaRagazzi(state, payload){
        state.presenzeattivitaragazzi = payload;
    },

    saveactivity(state, payload){
        state.activities.unshift(payload);
    },

    saveassociazioneactivityragazzo(state, payload){
        payload.forEach(element => {
            state.activitiesragazziassociazioni.unshift(element);
        });
    },

    eliminaactivity(state, id){
        state.activities = state.activities.filter(u => u.id !== id);
    },

    eliminaassociazione(state, id){
        state.activitiesragazziassociazioni = state.activitiesragazziassociazioni.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}