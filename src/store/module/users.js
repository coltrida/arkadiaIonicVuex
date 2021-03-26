import axios from 'axios';
import help from '../../help';

const state = () => ({
    users: [],
    presenze: [],
    user: {},
    logged: false
});
 
const getters = {
    allusers(state){
        return state.users;
    },

    allpresenze(state){
        return state.presenze;
    },

    getUser(state){
        return state.user;
    },

    getLogged(state){
        return state.logged;
    },
};
 
const actions = {
    async fetchUsers({commit}){
        const response = await axios.get(`${help().linkoperatori}`);
        commit('fetchUsers', response.data);
    },

    async fetchPresenze({commit}, id){
        const response = await axios.get(`${help().linkpresenzeoperatore}/${id}`);
        commit('fetchPresenze', response.data);
    },

    async loginUser({commit}, payload){
        const response = await axios.post(`${help().linklogin}`, payload);
        commit('loginUser', response.data);
    },

    async savepresenza({commit}, payload){
        const response = await axios.post(`${help().linkpresenzeoperatore}`, {
            id: payload.idUser,
            giorno: payload.giorno,
            ore: payload.ore
        });
        commit('savepresenza', response.data);
    },

    async eliminapresenza({commit}, id){
        await axios.delete(`${help().linkpresenzeoperatore}/${id}`);
        commit('eliminapresenza', id);
    },
};
 
const mutations = {
    fetchUsers(state, payload){
        state.users = payload;
    },

    fetchPresenze(state, payload){
        state.presenze = payload;
    },

    savepresenza(state, payload){
        state.presenze.unshift(payload);
    },

    eliminapresenza(state, id){
        state.presenze = state.presenze.filter(u => u.id !== id);
    },

    loginUser(state, payload){
        if (payload)
        {
            state.user = payload;
            state.logged = true;
        }
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}