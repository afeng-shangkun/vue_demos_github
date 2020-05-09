<template>
<div>
{{$store.state.Users.users}}
<button @click="getAllUsres">获取所有的用户信息</button>
<table>
<tr>
<td>username</td>
<td>userpwd</td>
</tr>
<tr v-for="(user,index) in users" v-bind:key="index">
  <td>{{user.username}}</td>
<td>{{user.userpwd}}</td>
</tr>
</table>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      // users: []
    }
  },
  methods: {
    // namespaced  actions的集合
    ...mapActions('Users', ['getUsers']),
    getAllUsres: function () {
      console.log('OK')
      // this.$store.dispatch('getUsers')
      this.getUsers()
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  computed: {
    // namespaced  Getters的集合
    ...mapGetters('Users', ['users'])

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.getUsers()
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
