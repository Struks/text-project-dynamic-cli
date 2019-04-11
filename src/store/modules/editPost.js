// import db from '@/firebase/init'
const state = {
    post:{},
    id:0
   
}

const getters = {
    post(state){return state.post}
}

const mutations = {
    // editPost(state,payload){       
    //     db.collection('blog').doc(payload)
    //     .set(state.post).then((docRef)=>{
    //         this.post.title = this.title,
    //         this.post.text = this.text,
    //         this.post.url = this.url,
    //         this.post.timestamp = new Date()    
    //     })    
    // }
}

const actions = {
    // editPost(context,payload){
    //     setTimeout(()=>{
    //         context.commit('editPost',payload)
    //     },500)
    // }
    
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