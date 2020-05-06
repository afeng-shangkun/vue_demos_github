// 1、导入vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
// 2、在vue中使用vuex
Vue.use(Vuex)
// 3、创建vuex对象
const store = new Vuex.Store({
  state: {
    hello: 'hello,vuex!',
    count: 10,
    age: 18
  }
})
// 4、导出vuex对象，供其他模块使用
export default store
