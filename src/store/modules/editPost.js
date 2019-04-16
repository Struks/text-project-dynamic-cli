import db from '@/firebase/init'
const state = {
    post:{},
}

const getters = {
    post(state){return state.post},
}

const mutations = {
    editPost(state,payload){state.post = payload}
}

const actions = {
    getEditPost(payload){
        const post={}
        db.collection('blog').doc(payload)
        .update({
            title :  post.title,
            text : post.text,
            url : post.url,
            timestamp : post.timestamp  
        })
  
        
    },
    loadPostOnEditor({commit},payload){ 
        commit('editPost',payload);
        db.collection("blog").doc(payload)
        .onSnapshot((doc) => {
            state.post ={
                title: doc.data().title,
                url:doc.data().url,
                text:doc.data().text,
                timestamp: doc.data().timestamp,
                id:doc.id
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