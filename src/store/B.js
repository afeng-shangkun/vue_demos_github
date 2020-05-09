const moduleB = {
  state: {
    privince: '北京',
    name: 'czf'
  },
  getters: {},
  actions: {},
  mutations: {
    changePrivince (state, newPrivince) {
      state.privince = newPrivince
    }
  }
}
export default moduleB
