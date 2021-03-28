import axios from 'axios';
import help from '../../help';

const state = () => ({
    activities: [],                                // lista delle attività
    activitiesragazziassociazioni: [],             // lista delle associazioni ragazzo - attivita
    presenzeattivitaragazzi: [],                   // lista delle presenze attivita - ragazzo
    attivita: {                                    // attività da inserire
        idAttivitaSelelezionata: '',
        raga: [],
        giorno: '',
        costo: 0,
        quantita: ''
    }
});
 
const getters = {
    allactivities(state){                            // get delle attivita
        return state.activities;
    },
    allactivitiesragazziassociazioni(state){         // get delle associazioni ragazzo - attivita
        return state.activitiesragazziassociazioni;
    },
    allpresenzeattivitaragazzi(state){               // get delle presenze attivita - ragazzo
        return state.presenzeattivitaragazzi;
    },
    getAttivita(state){                              // get dell'attività da inserire
        return state.attivita;
    }
};
 
const actions = {
    async fetchActivities({commit}){                                    // popola la lista delle attività
        const response = await axios.get(`${help().linkattivita}`);
        commit('fetchActivities', response.data);
    },

    async fetchActivitiesRagazzi({commit}){                             // popola la lista delle associazioni
        const response = await axios.get(`${help().linkassociazioni}`);
        commit('fetchActivitiesRagazzi', response.data);
    },

    async fetchPresenzeAttivitaRagazzi({commit}){                          // popola la lista delle presenze
        const response = await axios.get(`${help().linkattivitacliente}`);
        commit('fetchPresenzeAttivitaRagazzi', response.data);
    },

    async saveactivity({commit}, payload){                                  // salva attività
        const response = await axios.post(`${help().linkinserisciattivita}`, {
            nomeAttivita: payload.nomeAttivita,
            tipo: payload.tipo,
            costo: payload.costo,
        });
        commit('saveactivity', response.data);
    },

    async saveassociazioneactivityragazzo({commit}, payload){          // salva associazione attività ragazzo
        const response = await axios.post(`${help().linkassociaattivitacliente}`, {
            attivita: payload.attivita,
            raga: payload.raga,
        });
        commit('saveassociazioneactivityragazzo', response.data);
    },

    async eliminaactivity({commit}, id){                                 // elimina attività
        await axios.delete(`${help().linkattivita}/${id}`);
        commit('eliminaactivity', id);
    },

    async eliminaassociazione({commit}, id){                             // elimina associazione
        await axios.delete(`${help().linkassociazioni}/${id}`);
        commit('eliminaassociazione', id);
    },

    async elementoselezionato({commit}, id){        // mi restituisce gli id ragazzi dell'attività selezionata
        const response = await axios.get(`${help().linkattivitacliente}/${id}`);
        commit('elementoselezionato', response.data);
    },

    async saveactivityragazzo({commit}, payload){       // salva l'attività dei ragazzi selezionati
        const response = await axios.post(`${help().linkattivitacliente}`, {
            giorno: payload.giorno,
            raga: payload.raga,
            attivita: payload.idAttivitaSelelezionata,
            quantita: payload.quantita,
            costo: parseFloat(payload.quantita*payload.costo),
            note: ''
        });
        commit('saveactivityragazzo', response.data);
    },

    async eliminapresenzaragazzo({commit}, id){                             // elimina presenza ragazzo
        await axios.delete(`${help().linkattivitacliente}/${id}`);
        commit('eliminapresenzaragazzo', id);
    },
    
};
 
const mutations = {
    fetchActivities(state, payload){                            // popola le attività
        state.activities = payload;
    },

    fetchActivitiesRagazzi(state, payload){                     // popola la lista delle attività
        state.activitiesragazziassociazioni = payload;
    },

    fetchPresenzeAttivitaRagazzi(state, payload){               // popola la lista delle presenze
        state.presenzeattivitaragazzi = payload;
    },

    saveactivity(state, payload){                                 // salva attività
        state.activities.unshift(payload);
    },

    saveassociazioneactivityragazzo(state, payload){            // salva associazione attività ragazzo
        payload.forEach(element => {
            state.activitiesragazziassociazioni.unshift(element);
        });
    },

    eliminaactivity(state, id){                                      // elimina attività
        state.activities = state.activities.filter(u => u.id !== id);
    },

    eliminaassociazione(state, id){                                   // elimina associazione
        state.activitiesragazziassociazioni = state.activitiesragazziassociazioni.filter(u => u.id !== id);
    },

    elementoselezionato(state, payload){        // mi restituisce gli id ragazzi dell'attività selezionata
        state.attivita.raga.length = 0;
        payload.forEach(element => {
            state.attivita.raga.push(element.client_id)
        });
    },

    saveactivityragazzo(state, payload){            // salva l'attività dei ragazzi selezionati
        payload.forEach(element => {
            state.presenzeattivitaragazzi.unshift(element);
        });
    },

    eliminapresenzaragazzo(state, id){                                   // elimina presenza ragazzo
        state.presenzeattivitaragazzi = state.presenzeattivitaragazzi.filter(u => u.id !== id);
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}