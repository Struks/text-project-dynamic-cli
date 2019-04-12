import db from '@/firebase/init'
const state = {
    post:{},
    id:0
   
}

const getters = {
    post(state){return state.post},
}

const mutations = {
    setPost(state,payload){state.post = payload}
}

const actions = {
    
    
    editPost({commit},payload){       
        db.collection('blog').doc(payload).update({
            title : payload.title,
            text : payload.text,
            url : payload.url,
            timestamp : payload.timestamp       
        }).catch(err =>{
            console.log(err)
        });
        commit('setPost')
          
    },
}

export default{
    state,
    getters,
    mutations,
    actions
}