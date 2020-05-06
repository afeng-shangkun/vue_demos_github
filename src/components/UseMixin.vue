<template>
<div>
<h1>在组建中使用Mixin</h1>
<button @click="sayHello">使用mixin</button>
<h1>在父组件中使用子组件</h1>
<h3>1、引入子组件</h3>
<h3>2、声明子组件</h3>
<h3>3、使用子组件</h3>
<my-child :title="parentTitle" :age='15'></my-child>
</div>
</template>

<script>
// 导入模块'
import commonHi from '@/mixins/common_hi'
// 导入子组件
import Child from '@/components/Child'
export default {
  mixins: [commonHi],
  // 声明当前父组件中使用了哪些子组件
  components: {
    MyChild: Child
  },
  data () {
    return {
      parentTitle: 'this is a  parent component parentTitle prop!',
      czf: 'Child component!'
      // user: {
      //   name: 'parent user name!'
      // }
    }
  },
  methods: {
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
