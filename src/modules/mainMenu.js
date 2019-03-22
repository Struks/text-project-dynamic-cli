export default{

    state:{
        menues: [
            { link: "/", name: "HOME", exact: true },
            { link: "/About", name: "ABOUT", exact: false },
            { link: "/Work", name: "WORK", exact: false },
            { link: "/Contact", name: "CONTACT", exact: false },
            { link: "/Link", name: "TEST", exact: false }
        ], 
    },

    getters:{        
        menues: state => state.menues,
    },

    mutations:{

    }
}