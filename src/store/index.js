import Lodash from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

import { getterTypes, mutationTypes } from './types'
import INITIAL_STATE from './initialState'

import generator from './generator'

Vue.config.productionTip = false
Vue.use(Vuex)

/********************************************************
 ************** GETTERS
 ********************************************************/

const getters = {
  [getterTypes.IS_CONTENT_LOADING]: state => {
    return state.isContentLoading
  }
}

/********************************************************
 ************** MUTATIONS
 ********************************************************/

const mutations = {
  [mutationTypes.SET_CONTENT_IS_LOADING]: (state, value) => {
    state.isContentLoading = value
  }
}

/********************************************************
 ************** ACTIONS
 ********************************************************/

const actions = {
}

/********************************************************
 ************** EXPORT STORE
 ********************************************************/

export default new Vuex.Store({
  strict: ['production', 'testing'].indexOf(process.env.NODE_ENV) === -1,
  state: Lodash.cloneDeep(INITIAL_STATE),
  getters,
  mutations,
  actions,
  modules: {
    generator
  }
})
