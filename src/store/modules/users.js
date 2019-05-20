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
    async setUser({ commit }, payload) {
        if (payload) {
            commit('spinner/setLoading', true, {root:true})
            await db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
                let user = {};
                snapshot.docs.forEach(doc => {
                    user = doc.data()
                    user.id = doc.id
                })
                commit('authentication/setLogUser', user, { root: true })
            })
            commit('spinner/setLoading', false, {root:true})
        }
    },
    //update edit profil acount
    saveEditProfil({commit},payload){
        db.collection('users').doc(payload.id).update({
            bio:payload.bio,
            img:payload.img
        })
        commit('authentication/setLogUser', payload, { root: true });
        setTimeout(()=>{
            router.push(`/${payload.id}`)
        },400)
    },
    //get users 
    async getUsers({commit}){
        const users = []
        commit('spinner/setLoading', false, {root:true});
        await db.collection('users').orderBy('firstname').onSnapshot(res =>{
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
        commit('spinner/setLoading', false, {root:true});
    },
}

export default{
    state,
    getters,
    mutations,
    actions
}