import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

export default new Vuex.Store({
  strict: ['production', 'testing'].indexOf(process.env.NODE_ENV) === -1,
  getters: {},
  mutations: {},
  modules: {}
})
