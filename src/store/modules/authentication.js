import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/init'
import router from '@/router'

const state = {
    feedback: '',
    currentUser: null,
}

const getters = {
    feedback: state => state.feedback,
    currentUser: state => state.currentUser,

}

const mutations = {
    setFeedback: (state, payload) => state.feedback = payload,
    setCurrentUser: (state, payload) => state.currentUser = payload,

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
    async login({commit}, payload) {
        commit('setFeedback', null)
        await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(()=>{
                router.push('/blog')
            })
            .catch(err => {
                commit('setFeedback', err.message)
            })
    },
    //get current user
    async getCurrentUser({commit}, payload) {
        if(payload) {
            await db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                //  SET USER DATA
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('setCurrentUser', user);
            })
        }
    },
    //logout
    logout({
        commit
    }) {
        commit('setFeedback', null)
        firebase.auth().signOut().then(() => {
            commit('setCurrentUser', null)
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