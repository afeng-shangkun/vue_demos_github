<template>
<div>
<button @click="getAllUsers">测试Action</button>
 {{$store.state.Users.users}}
</div>
</template>

<script>
import user from '@/ajax/user'
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    f1: function (data) {
      console.log(data)
    },
    getAllUsers: function () {
      console.log(this)
      this.$store.dispatch('getUsers')
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    user.getUsersAjax(function (data) {
      console.log('data:')
      this.users = data
      console.log(data)
    })
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
