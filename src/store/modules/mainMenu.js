const state = {
    menues: [
        { link: "/", name: "HOME", exact: true },
        { link: "/about", name: "ABOUT", exact: false },
        { link: "/work", name: "WORK", exact: false },
        { link: "/contact", name: "CONTACT", exact: false },
        // { link: "/Link", name: "TEST", exact: false },
        { link: '/blog', name: 'BLOG', exact: false },
    ], 
    auth:[
        {link: '#', name:'Login'},
        {link: '#', name:'Register'},
    ]
}

const getters = {        
    menues(state) {return state.menues},
    auth(state) {return state.auth}
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
