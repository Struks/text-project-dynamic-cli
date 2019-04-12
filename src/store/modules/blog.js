import db from '@/firebase/init'

const state ={
    
    blogCategories:[
        {
            value:'all',
            checked:true,
            text:'ALL'
        },
        {
            value:'nature',
            checked:false,
            text:'Nature'
        },
        {
            value:'Tehnology',
            checked:false,
            text:'TEHNOLOGY'
        },
        {
            value:'art',
            checked:false,
            text:'ART'
        },
        {
            value:'history',
            checked:false,
            text:'HISTORY'
        },
    ],
    selectedCategoryBlog: "all",
    activeCategoryBlog: 'all',
    blog:[],

}

const getters = {
    blogCategories: state => state.blogCategories,
    activeCategoryBlog: state => state.activeCategoryBlog,
    blog: state => state.blog,


}

const mutations = {
    setPosts: (state, payload) => state.posts = payload,
    activeBlog:(state,active) => state.activeCategoryBlog = active, 
    getBlogs(state, payload){state.blog = payload},  
  
}

const actions = {
    getBlogs({commit}){
        const blog= []
        db.collection('blog').orderBy('title','desc').onSnapshot(res =>{
            const changes = res.docChanges();
            changes.forEach(change => {
              if(change.type === 'added'){
                blog.push({
                  ...change.doc.data(),
                  timestamp:change.doc.data().timestamp,
                  id: change.doc.id
                })
              }
              commit('getBlogs',blog)
            })
          })
    }
    
}

export default{
    state,
    getters,
    mutations,
    actions
}
