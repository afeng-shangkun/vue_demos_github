import user from '@/ajax/user'
const state = {
  users: []
}
const getters = {
  users: state => state.users
  
}

const mutations = {
  setUsrs (state, users) {
    state.users = users
  }
}

const actions = {
  getUsers ({commit}) {
    // user.getUsersAjax(function (data) {
    //   commit('setUsrs', data)
    // })
    user.getUsersAjax(data => {
      commit('setUsrs', data)
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
