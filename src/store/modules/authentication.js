import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/init'
import router from '@/router'
// import { longStackSupport } from 'q';

const state = {
    feedback:'',
    logUser: null,
}

const getters = {
    feedback: state => state.feedback,
    logUser: state => state.logUser,
}

const mutations = {
    setFeedback:(state,payload) => state.feedback = payload, 
    setLogUser:(state,payload) => state.logUser = payload
}

const actions = {
    // sign up
    signUp({commit},payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
            db.collection("users").doc().set({
                firstname: payload.firstname,
                lastname: payload.lastname,
                email: payload.email,
                username: payload.username, 
            }).then(()=>{
                commit('setFeedback', null)
                router.push('/blog')
            })
        }).catch(err =>  {
            commit('setFeedback', err.message)
        })
    },
    // login
    login({commit},payload){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(() =>{
            const newUser = {
            id: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email
            };
            commit('setLogUser', newUser)
        })
        .then(() =>{
            commit('setFeedback', null)
            router.push('/blog')
        }).catch(err =>{
            commit('setFeedback', err.message)
        })
        
    },
    //logout
    logout({commit}){
        firebase.auth().signOut().then(()=>{
            commit('setLogUser',null)
            router.replace('login')
            
        })
    },
    //without change login/logout
    autoSignIn({ commit }, payload ) {
        commit('setLogUser', { id: payload.uid });
    },
}

export default{
    state,
    getters,
    mutations,
    actions
}