const state = {
    menues: [
        { link: "/", name: "HOME", exact: true },
        { link: "/about", name: "ABOUT", exact: false },
        { link: "/work", name: "WORK", exact: false },
        { link: "/contact", name: "CONTACT", exact: false },
        // { link: "/Link", name: "TEST", exact: false },
        { link: '/blog', name: 'BLOG', exact: false }
    ], 
}

const getters = {        
    menues(state) {return state.menues},
}

const mutations = {

}
const actions = {

}
    
export default{
    state,
    getters,
    mutations,
    actions
}
