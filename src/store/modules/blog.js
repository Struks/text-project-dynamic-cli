import db from '@/firebase/init'

const state = {

    blogCategories: [{
            value: 'all',
            checked: true,
            text: 'ALL'
        },
        {
            value: 'nature',
            checked: false,
            text: 'Nature'
        },
        {
            value: 'tehnology',
            checked: false,
            text: 'TEHNOLOGY'
        },
        {
            value: 'art',
            checked: false,
            text: 'ART'
        },
        {
            value: 'history',
            checked: false,
            text: 'HISTORY'
        },
    ],
    selectedCategoryBlog: "all",
    activeCategoryBlog: 'all',
    blog: [],
    lastVisiblePost: '',
    filteredPosts: [],
    noMorePosts: false,
    orderBy: 'asc',
}
const getters = {
    blogCategories: state => state.blogCategories,
    activeCategoryBlog: state => state.activeCategoryBlog,
    blog: state => state.blog,
    noMorePosts: state => state.noMorePosts,
    selectedCategoryBlog: state => state.selectedCategoryBlog,
    filteredPosts: state => {
        let category = state.selectedCategoryBlog;
        if (category !== 'all'){
            return state.filteredPosts
        }else{
            return state.blog;
        }
    },
    // filteredPosts: state => {
    //     return state.filteredPosts;
    // },
    lastVisiblePost: state => {
        return state.lastVisiblePost;
    },
    orderBy: state => {
        return state.orderBy
    }

   
}
const mutations = {
    // setPosts: (state, payload) => state.posts = payload,
    activeBlog: (state, active) => state.activeCategoryBlog = active,
    setBlogs: (state, payload) => state.blog = payload,
    changeCategory: (state, category) => state.selectedCategoryBlog = category,
    setFilteredPosts:(state, payload) => {
        state.filteredPosts = payload;
    },
    setLastVisiblePost:(state, payload) => {
        state.lastVisiblePost = payload;
    },
    setNoMorePosts:(state, payload) => {
        state.noMorePosts = payload;
    },
    setOrderBy:(state) => {
        if(state.orderBy === 'asc'){
            state.orderBy = 'desc';
        }else{
            state.orderBy = 'asc'
        }
    }
   
}
const actions = {
    // //all posts
    // async getBlogs({commit}, payload) {
    //     commit('spinner/setLoading', true, {root: true})
    //     const blog = []
    //     await db.collection('blog').limit(payload).orderBy('title', 'desc').onSnapshot(res => {
    //         const changes = res.docChanges();
    //         changes.forEach(change => {
    //             if (change.type === 'added') {
    //                 blog.push({
    //                     ...change.doc.data(),
    //                     timestamp: change.doc.data().timestamp,
    //                     id: change.doc.id
    //                 })
    //             }
    //             commit('setBlogs', blog);               
    //         })
    //     })
    //     commit('spinner/setLoading', false, {root:true});
    // },
    //delete post
    async deletePost({commit}, payload ) {
        commit('spinner/setLoading', true, { root: true });
        await db.collection("blog")
            .doc(payload)
            .delete();    
        commit('spinner/setLoading', false, { root: true });
    },
    //get filtered post
    async getFilteredPosts({commit}, payload){
        commit('spinner/setLoading', true, { root: true })
        const filteredPosts = [];
        await db.collection('blog').where('category', '==', payload).get().then(snapshot => {
            if(snapshot.docs.length) {
                snapshot.docs.forEach(doc => {
                    filteredPosts.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                    commit('setFilteredPosts', filteredPosts);
                    commit('spinner/setLoading', false, { root: true });
                })   
            }else {
                commit('setFilteredPosts', []);
                commit('spinner/setLoading', false, { root: true });
            }                    
        })
    },
    // load more
    loadMore({state, commit}){
        db.collection('blog').orderBy('timestamp', state.orderBy).startAfter(state.lastVisiblePost)
        .limit(2).get().then(snapshot => {
            if(snapshot.docs.length === 0){
                commit('setNoMorePosts', true);
            } 
            let lastVisiblePost = snapshot.docs[snapshot.docs.length - 1];
              snapshot.forEach(doc =>{
                state.blog.push({
                    ...doc.data(),
                    id: doc.id,
                });
                commit('setLastVisiblePost', lastVisiblePost);  
            })
        })
    },
    //sortable
    
}
export default {
    state,
    getters,
    mutations,
    actions
}