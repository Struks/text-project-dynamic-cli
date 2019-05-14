import db from '@/firebase/init'
const state = {
    post:{}
}

const getters = {
    post(state) {
        return state.post;
    }
}

const mutations = {
    setPost(state,payload){
        state.post = payload;
    }
}

const actions = {
    getSinglePost({commit}, payload){
        
        db.collection('blog').doc(payload).then(doc =>{
            if(doc.exists){
                state.post = (
                payload.title = doc.data().title,
                payload.url = doc.data().url,
                payload.text = doc.data().text,
                payload.timestamp = doc.data().timestamp,
                payload.headline = doc.data().title,
                payload.id = doc.id
                );
                commit('setPost')
            }
            
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}