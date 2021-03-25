import axios from 'axios';
import help from '../../help';

const state = () => ({
    users: [],
    user: {},
    logged: false
});
 
const getters = {
    allusers(state){
        return state.users;
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

    async loginUser({commit}, payload){
        const response = await axios.post(`${help().linklogin}`, payload);
        commit('loginUser', response.data);
    },
};
 
const mutations = {
    fetchUsers(state, payload){
        state.users = payload;
    },

    loginUser(state, payload){
        console.log(payload);
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