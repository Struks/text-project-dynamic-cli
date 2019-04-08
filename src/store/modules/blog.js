// import db from '../../firebase/init'

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
    activeCategoryBlog: 'all'

}

const getters = {
    blogCategories: state => state.blogCategories,
    activeCategoryBlog: state => state.activeCategoryBlog,
}

const mutations = {
    setPosts: (state, payload) => state.posts = payload,
    activeBlog:(state,active) => state.activeCategoryBlog = active,    
}

const actions = {
        
    
}

export default{
    state,
    getters,
    mutations,
    actions
}
