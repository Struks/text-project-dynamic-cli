import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/init'
import router from '@/router'

const state = {
    feedback: '',
    logUser: null,
    //users
    // users:[],
}

const getters = {
    feedback: state => state.feedback,
    logUser: state => state.logUser,
    //users
    // users:state => state.users,
}

const mutations = {
    setFeedback: (state, payload) => state.feedback = payload,
    setLogUser: (state, payload) => state.logUser = payload,
    //set users
    // setUsers(state, payload){
    //     state.users = payload;
    // }
}

const actions = {
    // sign up
    signUp({
        commit
    }, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                db.collection("users").doc().set({
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                    email: payload.email,
                    username: payload.username,
                    user_id: firebase.auth().currentUser.uid,
                    role: "user",
                }).then(() => {
                    commit('setFeedback', null)
                    router.push('/blog')
                })
            }).catch(err => {
                commit('setFeedback', err.message)
            })
    },
    // login
    login({
        commit
    }, payload) {
        commit('setFeedback', null)
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                const newUser = {
                    id: firebase.auth().currentUser.uid,
                    email: firebase.auth().currentUser.email
                };
                commit('setLogUser', newUser)
            })
            .then(() => {
                commit('setFeedback', null)
                router.push('/blog')
            }).catch(err => {
                commit('setFeedback', err.message)
            })

    },
    //logout
    logout({
        commit
    }) {
        commit('setFeedback', null)
        firebase.auth().signOut().then(() => {
            commit('setLogUser', null)
            router.replace('login')

        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}