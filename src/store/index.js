import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 22
  },
  getters: {
    storeCount: state => state.count
  },
  mutations: {
    increment: (state, payload) => {
      state.count = state.count + payload
    },
    decrement: state => state.count--
  },
  actions: {
    increment: function (context, payload) {
      setTimeout(function () {
        context.commit('increment', payload)
      }, 2000)
    }
  },
  modules: {
  }
})
