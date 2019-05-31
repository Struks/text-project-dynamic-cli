const state = {
    modal: false,
    config:{}
}
const getters = {
    modal: state => {
        return state.modal
    },
    config: state => {
        return state.config
    },
}
const mutations = {
    setModal: (state, payload) => {
        state.modal = payload
    },
    setConfig:(state,payload) => {
        state.config = payload;
    }
}
const actions = {
    getModal: ({commit}, payload) => {
        commit('setModal', payload);
    },
    getConfig({commit}, payload){
        commit('setConfig', payload);
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}