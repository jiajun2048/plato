import createPersist from 'vuex-localstorage'
import { createAction, handleAction } from 'vuex-actions'
import request from 'plato-request'

import {
  ONE_WEEK
} from '../constants'

const ENV_KEY = 'ENV_KEY'
const SET_ENV = 'SET_ENV'

const persist = createPersist(ENV_KEY, {
  lang: navigator.language.split('-')[0],
  i18n: null,
  authorized: false
}, {
  expires: ONE_WEEK
})

const state = persist.get()

const getters = {
  lang: state => state.lang,
  i18n: state => state.i18n,
  authorized: state => state.authorized
}

const actions = {
  setEnv: createAction(SET_ENV, payload => {
    if (payload.lang) {
      return request({
        url: `./i18n/${payload.lang}.json`
      }).then(i18n => ({ ...payload, i18n }))
    }
    return Promise.resolve(payload)
  })
}

const mutations = {
  [SET_ENV]: handleAction((state, mutation) => {
    Object.assign(state, mutation)
    persist.set(state)
  })
}

export default {
  state,
  getters,
  actions,
  mutations
}
