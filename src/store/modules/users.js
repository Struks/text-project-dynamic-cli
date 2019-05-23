import 'firebase/auth';
import db from '@/firebase/init'
import router from '@/router'

const state = {
    users:[],
    singleUser:''
}

const getters = {
    users:state => state.users,
    singleUser:state => state.singleUser,
}

const mutations = {
    setUsers(state, payload){
        state.users = payload;
    },
    setSingleUser(state, payload){
        state.singleUser = payload;
    }
}

const actions = {
    //get user (main implementation)
    async getSingleUser({ commit }, payload) {
        if (payload) {
            
            commit('spinner/setLoading', true, {root:true})
            let user = {};
            await db.collection('users').doc(payload).get().then(doc => {
                user = doc.data()
                user.id = doc.id
                commit('setSingleUser', user)
                })
            }
            commit('spinner/setLoading', false, {root:true})
    },
    //update edit profil acount
    saveEditProfil({commit},payload){
        db.collection('users').doc(payload.id).update({
            bio:payload.bio,
            img:payload.img,
            role: payload.role
        })
        commit('setSingleUser', payload);
        setTimeout(()=>{
            router.push(`/${payload.id}`)
        },400)
    },
    //get single users 
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