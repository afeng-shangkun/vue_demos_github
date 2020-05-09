const user = {
  state: {
    mytest: 'this is user.js '
  },
  getters: {
    doSome: state => {
      return state.mytest.split(' ')
    }

  },
  actions: {},
  mutations: {}
}
export default user
