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
    filteredPosts: state => {
        let category = state.selectedCategoryBlog;
        let result = [];
        if (category !== 'all') {
            result = state.blog.filter(post => {
                return post.category === category;
            });
        } else {
            result = state.blog;
        }
        return result;
    }
}





const mutations = {
    setPosts: (state, payload) => state.posts = payload,
    activeBlog: (state, active) => state.activeCategoryBlog = active,
    getBlogs: (state, payload) => state.blog = payload,
    changeCategory: (state, category) => state.selectedCategoryBlog = category

}

const actions = {
    getBlogs({commit}, n) {
        const blog = []
        db.collection('blog').limit(n).orderBy('title', 'desc').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    blog.push({
                        ...change.doc.data(),
                        timestamp: change.doc.data().timestamp,
                        id: change.doc.id
                    })
                }
                commit('getBlogs', blog)
            })
            const sizeOfBlog = res.size
            if (n !== sizeOfBlog) {
                state.noMoreProjects = true
            } else {
                state.noMoreProjects = false
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