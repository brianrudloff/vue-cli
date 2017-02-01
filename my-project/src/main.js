/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import vdxMixinCreator from 'vuedeux';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import photoGrid from './components/Photogrid'
import single from './components/Single'

import vdx from 'vuedeux';

import reduxStore from './redux/store';
import * as actionCreators from './redux/actions/reduxActions';

import store from './vuex/vuex'

Vue.use(VueRouter)



const routes = [
  { path: '/', component: photoGrid },
   {path: '/:id', component: single} 

]

const router = new VueRouter({
  routes // short for routes: routes
})


/* eslint-disable */



const app = new Vue({
  router,
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
}).$mount('#app');

console.log('store', store)