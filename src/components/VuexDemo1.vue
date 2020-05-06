<template>
<div>
{{$store.state.hello}}<br/>
<button @click='getStoreAge'>获取store的age</button>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getStoreAge: function () {
      alert(this.$store.state.age)
    }
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
