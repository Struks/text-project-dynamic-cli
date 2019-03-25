const state = {
     menues: [
        { link: "/", name: "HOME", exact: true },
        { link: "/About", name: "ABOUT", exact: false },
        { link: "/Work", name: "WORK", exact: false },
        { link: "/Contact", name: "CONTACT", exact: false },
        { link: "/Link", name: "TEST", exact: false }
    ], 
}

    const getters = {        
        menues(state) {return state.menues},
    }

    const mutations = {
        // SET_MENU(state,payload){
        //     state.menues = payload
        // }
    }
    const actions = {
       
    }
    
export default{
    state,
    getters,
    mutations,
    actions
}
