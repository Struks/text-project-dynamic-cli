import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
let Bootstrap = require('bootstrap')
global.Bootstrap = Bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
import Vuelidate from 'vuelidate'
import SvgIcon from 'vue-svgicon'
import Vuex from 'vuex';
import moment from 'moment';
import firebase from 'firebase/app'
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridInstaller } from "@progress/kendo-grid-vue-wrapper";

//kendo grid wrapper
Vue.use(GridInstaller)

//vuelidate
Vue.use(Vuelidate)
Vue.config.productionTip = false

//svgicon
//Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon',
  classPrefix: 'vue-svg',
});

//vuex
Vue.use(Vuex);

//moment
Vue.filter('date', (created) => moment(created).format('MMMM Do YYYY'))

//initialize the app only when 
//we are sure Firebase Auth object is ready to use
let app = '';

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
      components:{
        Grid,
      }
    }).$mount('#app')
  }
  if (user) {
    store.dispatch('users/setUser', user);
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')