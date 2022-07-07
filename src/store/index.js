import { createStore } from 'vuex'
import { LoginUser } from '@/api/index.js'

export default createStore({
  state: {
    user_id: '',
    token: ''
  },
  getters: {
    isLogin(state) {
      return state.user_id !== ''
    }
  },
  mutations: {
    setUsername(state, data) {
      state.user_id = data
    },
    setToken(state, data) {
      state.token = data
    },
  },
  actions: {
    async Login({ commit }, loginData) {
      const { data } = await LoginUser(loginData)
      commit('setUsername', data.user_id)
      commit('setToken', data.token)
    }
  },
  modules: {
  }
})
