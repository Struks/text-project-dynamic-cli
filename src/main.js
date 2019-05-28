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

//-- GLOBAL FILTERS --//

//moment
Vue.filter('date', (created) => moment(created).format('MMMM Do YYYY'))

//eliminate html tags (striphtml)
Vue.filter('striphtml', value => {
  let StrippedText = value.replace(/(<([^>]+)>)/ig,"");
  return StrippedText;

  // let div = document.createElement('div');
  // div.innerHTML = value;
  // let text = div.textContent || div.innerHTML || '';
});

//limited number of characters
Vue.filter('limitChars', value => {
  if(value.length > 150){
    return value.substring(0,150) + '...'
  }else{
    return value;
  }
})

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
    store.dispatch('authentication/getCurrentUser', user);
  }
})

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')