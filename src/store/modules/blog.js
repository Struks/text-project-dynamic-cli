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
    noMoreProjects: false,
}

const getters = {
    blogCategories: state => state.blogCategories,
    activeCategoryBlog: state => state.activeCategoryBlog,
    blog: state => state.blog,
    noMoreProjects: state => state.noMoreProjects,
    selectedCategoryBlog: state => state.selectedCategoryBlog,
    // filteredPosts: state => {
    //     let category = state.selectedCategoryBlog;
    //     let result = [];
    //     if (category !== 'all') {
    //         result = state.blog.filter(post => {
    //             return post.category === category;
    //         });
    //     } else {
    //         result = state.blog;
    //     }
    //     return result;
    // },
    filteredPosts: state => {
        return state.filteredPosts;
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
}

const actions = {
    async getBlogs({commit}, payload) {
        commit('spinner/setLoading', true, {root:true})
        const blog = []
        await db.collection('blog').limit(payload).orderBy('title', 'desc').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    blog.push({
                        ...change.doc.data(),
                        timestamp: change.doc.data().timestamp,
                        id: change.doc.id
                    })
                }
                commit('setBlogs', blog)
            })
            const sizeOfBlog = res.size
            if (payload !== sizeOfBlog) {
                state.noMoreProjects = true
            }else {  
                state.noMoreProjects = false
            }
        })
        commit('spinner/setLoading', false, {root:true});
    },
    //delete post
    deletePost({commit}, payload ) {
        return db.collection("blog")
            .doc(payload)
            .delete();    
    },
    //get filtered post
    getFilteredPosts:({commit}, payload) => {
        let filteredPosts;
        db.collection('blog').doc('category', '==', payload).then(snapshot => {
            if(snapshot.docs.length) {
                snapshot.docs.forEach(doc => {
                    filteredPosts.push({
                        ...doc.data()
                    })
                })
            }
        })
    }


}

export default {
    state,
    getters,
    mutations,
    actions
}