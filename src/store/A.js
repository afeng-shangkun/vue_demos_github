const moduleA = {
  state: {
    privince: '湖南'
  },
  getters: {
    getA (state, getters, rootState) {
      console.dir(rootState)
      return state.privince
    }
  },
  actions: {},
  mutations: {
    changePrivince (state, newPrivince) {
      state.privince = newPrivince
    }
  }
}
export default moduleA
