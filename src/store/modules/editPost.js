// import db from '@/firebase/init'
const state = {
    // post:{},
   
}

const getters = {
    post(state){return state.post}
}

const mutations = {
    // editPost(state,payload){
    //     state.post = payload
    // }
}

const actions = {
    // getEditPost({commit,payload}){
    //     let post = {}
    //     db.collection("blog").doc(payload)
    //     .onSnapshot((doc) => {
    //         post ={
    //             title: doc.data().title,
    //             url:doc.data().url,
    //             text:doc.data().text
    //         }
    //         commit('editPost',post)
    //     }) 
    // }
}

export default{
    state,
    getters,
    mutations,
    actions
}