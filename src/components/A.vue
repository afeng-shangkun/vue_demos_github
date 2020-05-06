<template>
<div class="a">
  <h1>A组件</h1>
  {{ReceivedC}}
  <my-b :BChild="BChild" :CChild='CChild' v-on:getCData='AGetCData'></my-b>
</div>
</template>

<script>
import B from '@/components/B'
export default {
  components: {
    MyB: B
  },
  data () {
    return {
      BChild: 'A组件传递给B组件',
      CChild: 'A组件传递给C组件',
      ReceivedC: ''
    }
  },
  methods: {
    AGetCData: function (data) {
      console.log('c组件发送给A组件的数据:' + data)
      this.ReceivedC = data
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
.a {
  width: 800px;
  height: 800px;
  border: 1px solid red
}
</style>
