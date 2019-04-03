const state = {
    menues: [
        { link: "/", name: "HOME", exact: true },
        { link: "/About", name: "ABOUT", exact: false },
        { link: "/Work", name: "WORK", exact: false },
        { link: "/Contact", name: "CONTACT", exact: false },
        // { link: "/Link", name: "TEST", exact: false },
        { link: '/Blog', name: 'BLOG', exact: false }
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
