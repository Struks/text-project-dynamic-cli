import Vue from 'vue'
import Vuex from 'vuex'
//modules
import work from './modules/work'
import mainMenu from './modules/mainMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    work,
    mainMenu
  },
  state: {
    //header and footer
    // menues: [
    //   { link: "/", name: "HOME", exact: true },
    //   { link: "/About", name: "ABOUT", exact: false },
    //   { link: "/Work", name: "WORK", exact: false },
    //   { link: "/Contact", name: "CONTACT", exact: false },
    //   { link: "/Link", name: "TEST", exact: false }
    // ],  
  },
  getters:{
    
  },
  mutations: {
   
  },
  actions: {

  }
})
