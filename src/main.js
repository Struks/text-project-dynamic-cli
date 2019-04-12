import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index' 
let Bootstrap = require('bootstrap')
global.Bootstrap = Bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
import Vuelidate from 'vuelidate'
import SvgIcon from 'vue-svgicon'
import Vuex from 'vuex';
import moment from 'moment';
// Required for side-effects;
// require("firebase/firestore");

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
Vue.filter('date',(created) => moment(created).format('MMMM Do YYYY'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
