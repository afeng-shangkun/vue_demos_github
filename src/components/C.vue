<template>
<div class="c">
<p>$attrs:{{$attrs}}</p>
{{CChild}}
  <h1>C组件</h1>
  <button @click="CToA">向A组件发送数据</button>
</div>
</template>

<script>
export default {
  props: ['CChild'],
  inheritAttrs: false,
  data () {
    return {

    }
  },
  methods: {
    CToA: function () {
      // alert('CToA')
      this.$emit('getCData', 'C->A')
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
.c {
  width: 400px;
  height: 400px;
  border: 1px solid green
}
</style>
