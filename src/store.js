import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    historics : []
  },
  mutations: {
    addHistorics (state, historic ) {
      state.historics.unshift(historic)
    }
  }
})
export default store
