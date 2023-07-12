import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import templates from './templates'
import routerLink from './navbarLinks'
import imageStock from './imageStock'

export default new Vuex.Store({
  modules: {
    templates, routerLink,imageStock,
  }
})
