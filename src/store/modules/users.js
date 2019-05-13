import 'firebase/auth';
import db from '@/firebase/init'
import router from '@/router'

const state = {
    users:[],
}

const getters = {
    users:state => state.users,
}

const mutations = {
    setUsers(state, payload){
        state.users = payload;
    }
}

const actions = {
    //get user (main implementation)
    setUser({ commit }, payload) {
        if (payload) {
            db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('setLogUser', user)
            })
        }
    },
    //update edit profil acount
    saveEditProfil({commit},payload){
        db.collection('users').doc(payload.id).update({
            bio:payload.bio,
            img:payload.img
        })
        commit('setLogUser', payload);
        setTimeout(()=>{
            router.push(`/${payload.id}`)
        },400)
    },
    //get users 
    getUsers({commit}){
        const users = []
        db.collection('users').orderBy('firstname').onSnapshot(res =>{
            const changes = res.docChanges();
            changes.forEach(change =>{
                if(change.type === 'added'){
                   users.push({
                       ...change.doc.data(),
                       timestamp:change.doc.data().timestamp,
                       id: change.doc.id,   
                   }) 
                }
                commit('setUsers', users);
            })
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}