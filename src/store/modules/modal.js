const state = {
    modal: true,
}
const getters = {
    modal(state){
        return state.modal
    }
}
const mutations = {
    setModal(state, payload){
        state.modal = payload
    }
}
const actions = {
    getModal({commit}, payload){
        commit('setModal', payload)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}