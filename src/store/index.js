// 1、导入vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// 3、定义多个模块
import moduleA from './A'
import moduleB from './B'
import moduleC from './C'
import user from './modules/user'
import Users from './modules/Users'
// 2、在vue中使用vuex
Vue.use(Vuex)
// 3、创建vuex对象
const store = new Vuex.Store({
  state: {
    hello: 'hello,vuex!',
    count: 10,
    age: 18,
    name: 'czf',
    users: []
  },
  mutations: {
    // edit: function (state, newname) {
    //   state.name = newname
    // }
    edit (state, newname) {
      state.name = newname
    },
    changeHello (state, newHello) {
      state.hello = newHello
    },
    setEdit (state, payload) {
      console.log(payload)
      state.name = payload.payload.newName
      state.hello = payload.payload.newHello
    },
    addAddress (state, address) {
      Vue.set(state, 'address', address)
    },
    deleteAddress (state) {
      Vue.delete(state, 'address')
    },
    addUsers (state, payload) {
      state.users = payload
    }
  },

  getters: {
    getPerson: function (state) {
      return state.name + ' ' + state.age
    },
    getAll: function (state, getters) {
      return state.hello + ' ' + getters.getPerson
    }
  },

  actions: {
    // 5秒钟后改变name的值
    editAction (context, newname) {
      console.log(context)
      setTimeout(() => {
        context.commit('edit', newname)
      }, 1000)
    },
    addUsersAction (context) {
      axios({
        url: 'http://localhost:3000/api/user',
        method: 'get'
      }).then((resp) => {
        console.log(resp.data)
        context.commit('addUsers', resp.data)
      })
    }
  },
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
    user: user,
    Users: Users
  }

})
// 4、导出vuex对象，供其他模块使用
export default store
