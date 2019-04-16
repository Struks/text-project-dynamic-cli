import db from '@/firebase/init'
const state = {
    
}

const getters = {

}

const mutations = {

}

const actions = {
    getSinglePost({commit},payload){
        db.collection('blog').doc(payload).get().then(snapshot =>{
            let post = {};
            snapshot.docs.forEach(doc => {
                post = doc.data();
            })
            commit('setPost',post);
        })
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}