import db from '@/firebase/init'
const state = {
    post:{},
}

const getters = {
}

const mutations = {
    editPost(state,payload) {
        state.post = payload
    }
}

const actions = {
    // payload is charging in editPost.vue 
    getEditPost({commit}, payload){   
        db.collection('blog').doc(payload.id)
        .update({
            title :  payload.title,
            text : payload.text,
            url : payload.url,
            timestamp : payload.timestamp  
        })
        commit('editPost')
    },
    // loadPostOnEditor({payload}){ 
    //     // commit('editPost',payload);
    //     db.collection("blog").doc(payload.id)
    //     .onSnapshot((doc) => {
    //         payload.title = doc.data().title,
    //         payload.url = doc.data().url,
    //         payload.text = doc.data().text,
    //         payload.timestamp = doc.data().timestamp,
    //         payload.id = doc.id   
    //     })
    // }
    
}

export default{
    state,
    getters,
    mutations,
    actions
}