<template>
<div class="b">
  <h1>B组件</h1>
  {{BChild}}
  <p>$attrs:{{$attrs}}</p>
  <my-c v-bind="$attrs" v-on="$listeners"></my-c>
</div>
</template>

<script>
import C from '@/components/C'
export default {
  components: {
    MyC: C
  },

  props: ['BChild'],
  inheritAttrs: false,
  data () {
    return {

    }
  },
  methods: {},
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
.b{
  width: 600px;
  height: 600px;
  border: 1px solid blue
}
</style>
