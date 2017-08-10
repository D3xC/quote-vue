// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
require('./styles.css');
Vue.config.productionTip = false;

/* eslint-disable no-new */
// var vm = new Vue({
//   el: '#app',
//   router: router,
//   template: '<App/>',
//   components: { App },
//   data: {
    
//   }
// });

import Home from './components/Home.vue'
import About from './components/About.vue'
import Quote from './components/Quote.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/': {
    component: Home
  },
  '/home': {
    component: Home
  },
  '/quote': {
    component: Quote,
  },
  '/about': {
    component: About,
  },
  '/portfolio': {
    component: Portfolio,
  },
  '/contact': {
    component: Contact,
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')
