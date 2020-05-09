<template>
<div>
  {{$store.state.hello}}<br />
  <button @click='getStoreAge'>获取store的age</button>
  <h1>{{$store.state.name}}</h1>
  <button @click="changeName('jack23')">改变name</button>
  <button @click="changeHello('welcome to use Vuex!')">改变hello</button>
  <button @click="changeTwo">改变两个</button>
  {{$store.state.address}}
  <button @click="addAddress">添加</button>
  <button @click="deleteddress">删除</button>
  <h3>getters</h3>
  {{this.$store.getters.getPerson}}<br />
  {{this.$store.getters.getAll}}
  <hr />
  <button @click="aChangeName">调用action</button>
  <hr />
  <button @click="ajax">调用ajax</button>
  <br />
  {{this.$store.state.users}}
  <br />
  <table>
    <tr>
      <td>name</td>
      <td>password</td>
    <tr v-for="(user,index) in $store.state.users" v-bind:key="index">
      <td>{{user.username}}</td>
      <td>{{user.userpwd}}</td>

    </tr>
  </table>
  <hr/>
  <h3>多个模块</h3>
  {{$store.state.a.privince}}
  {{$store.state.b.privince}}
  {{$store.state.c.privince}}
  <br/>
  {{$store.state.b.name}}
  <br/>
  <button @click="changeAPrivince">改变模块A中的privince</button>
  <br/>
  <button @click="getA">调用模块A中的getA</button>
  <h2>没有使用辅助函数调用user</h2>
  <h4>调用state</h4>
  {{$store.state.user.mytest}}
  <h4>调用getter</h4>
  {{$store.getters.doSome}}
  <h2>使用辅助函数调用user</h2>
  <h4>调用state</h4>
  {{this.user.mytest}}<br/>
  {{this.doSome}}
</div>
</template>

<script>
// 解构赋值
// import vuex from 'vuex'
// import mapGetters from vuex.mapGetters
// 导入辅助函数
import {mapState, mapGetters} from 'vuex'

// import {mapGetters,mapActions}from'vuex'
export default {
  data () {
    return {
      users: this.$store.state.users
    }
  },
  methods: {
    getStoreAge: function () {
      alert(this.$store.state.age)
    },
    changeName: function (newname) {
      this.$store.commit('edit', newname)
    },
    changeHello: function (newHello) {
      this.$store.commit('changeHello', newHello)
    },
    changeTwo: function () {
      // this.$store.commit('setEdit', payload)
      this.$store.commit({
        type: 'setEdit',
        payload: {
          'newName': 'tomjack56',
          'newHello': 'asdwew0'
        }

      })
    },
    addAddress: function () {
      this.$store.commit('addAddress', '北京昌平')
    },
    deleteddress: function () {
      this.$store.commit('deleteAddress')
    },
    aChangeName: function () {
      this.$store.dispatch('editAction', 'Tom and Jack!')
    },
    ajax: function () {
      this.$store.dispatch('addUsersAction')
      this.users = this.$store.state.users
      console.log(this.users)
    },
    changeAPrivince: function () {
      this.$store.commit('changePrivince', '河北')
    },
    getA: function () {
      // this.$store.getters.getA()
      console.log(this.$store.getters.getA)
    }
  },
  computed: {
    // ...vuex.mapState({
    //   'user': 'user'
    // }),
    // ...vuex.mapGetters({
    //   'doSome': 'doSome'
    // })
    // ...表示的是对象展开符号
    // 对象混入到外部对象中,这个外部对象就是this
    ...mapState({
      'user': 'user'
    }),
    ...mapGetters({
      'doSome': 'doSome'
    })
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
