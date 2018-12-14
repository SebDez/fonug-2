import Lodash from 'lodash'

import INITIAL_STATE from './initialState'
import { getterTypes, mutationTypes, actionTypes } from './types'
import { mutationTypes as rootCommitTypes } from '@/store/types'

import Character from '@/entity/Character.model'
import CharacterDao from '@/dao/characters'

/********************************************************
 ************** GETTERS
 ********************************************************/

const getters = {
  [getterTypes.CHARACTER_GENERATED]: state => {
    return new Character(state.characterGenerated)
  }
}

/********************************************************
 ************** MUTATIONS
 ********************************************************/

const mutations = {
  [mutationTypes.RESET_GENERATOR]: (state) => {
    state.characterGenerated = void (0)
  },
  [mutationTypes.SET_CHARACTER_GENERATED]: (state, character) => {
    state.characterGenerated = character
  }
}

/********************************************************
 ************** ACTIONS
 ********************************************************/

const actions = {
  async [actionTypes.GENERATE_A_NEW_CHARACTER] ({ commit }) {
    commit(mutationTypes.RESET_GENERATOR)
    commit(rootCommitTypes.SET_CONTENT_IS_LOADING, true, { root: true })
    const character = await CharacterDao.generateCharacter()
    commit(rootCommitTypes.SET_CONTENT_IS_LOADING, false, { root: true })
    commit(mutationTypes.SET_CHARACTER_GENERATED, character)
  }
}

/********************************************************
 ************** EXPORT STORE
 ********************************************************/

export default {
  namespaced: true,
  state: Lodash.cloneDeep(INITIAL_STATE),
  getters,
  mutations,
  actions
}
