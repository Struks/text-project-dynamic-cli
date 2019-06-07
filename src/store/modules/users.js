import 'firebase/auth';
import db from '@/firebase/init';
import router from '@/router';

const state = {
    users: [],
    singleUser: '',
    userPosts: [],
}

const getters = {
    users: state => state.users,
    singleUser: state => state.singleUser,
    userPosts: state => state.userPosts

}

const mutations = {
    setUsers(state, payload) {
        state.users = payload;
    },
    setSingleUser(state, payload) {
        state.singleUser = payload;
    },
    setUserPosts(state, payload) {
        state.userPosts = payload
    },
}

const actions = {
    //get user (main implementation)
    async getSingleUser({ commit, dispatch }, payload) {
        if (payload) {
            commit('spinner/setLoading', true, { root: true })
            let user = {};
            await db.collection('users').doc(payload).get().then(doc => {
                user = doc.data()
                user.id = doc.id
                commit('setSingleUser', user)
                dispatch('getUserPosts', payload)
            })
        }
        commit('spinner/setLoading', false, {
            root: true
        })
    },
    //update edit profil acount
    async saveEditProfil({ commit }, payload) {
        db.collection('users').doc(payload.id).update({
            bio: payload.bio,
            img: payload.img,
            role: payload.role
        })
        commit('setSingleUser', payload);
        await router.push(`/${payload.id}`)

    },
    //get single users 
    async getUsers({
        commit
    }) {
        const users = []
        commit('spinner/setLoading', false, {
            root: true
        });
        await db.collection('users').orderBy('firstname').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    users.push({
                        ...change.doc.data(),
                        timestamp: change.doc.data().timestamp,
                        id: change.doc.id,
                    })
                }
                commit('setUsers', users);
            })
        })
        commit('spinner/setLoading', false, {
            root: true
        });
    },
    //get user posts
    async getUserPosts({
        commit
    }, payload) {
        commit('spinner/setLoading', true, {
            root: true
        })
        let post = [];
        await db.collection('blog').where('uid', '==', payload).get().then(snapshot => {
            if (snapshot.docs.length) {
                snapshot.docs.forEach(doc => {
                    post.push({
                        ...doc.data(),
                        id: doc.id
                    })
                    commit('setUserPosts', post)
                    commit('spinner/setLoading', false, {
                        root: true
                    })
                })
            } else {
                commit('setUserPosts', [])
                commit('spinner/setLoading', false, {
                    root: true
                })
            }
        })
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}