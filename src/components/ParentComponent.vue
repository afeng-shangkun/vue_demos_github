<template>
<div>
<h1>在父组件中使用子组件</h1>
<my-child class="parent" color='blue' :title="parentTitle" name="this is a no props!"
v-on:listenToChildEvent="getChildData">

<template #mydefaultslot='a'>
<span>{{a.name}}</span>
</template>

<template #myslot1>
myslot1
</template>

<template v-slot:myslot2>
<h1>myslot2</h1>
</template>

<template v-slot:[slotname]>
<h1>myslot3</h1>
</template>

</my-child>
{{ChildData}}
<button @click='changeSlotName'>动态变化插槽</button>
</div>
</template>

<script>
// 1、导入子组件
import ChildComponent from '@/components/ChildComponent'
// 2、声明
export default {
  components: {
    MyChild: ChildComponent
  },
  data () {
    return {
      parentTitle: 'this is  a parent title value!',
      ChildData: '',
      user: {
        name: 'parent user name'
      },
      slotname: 'b'

    }
  },
  methods: {
    getChildData: function (data) {
      // alert(data)
      this.ChildData = data
    },
    changeSlotName: function () {
      if (this.slotname === 'a') {
        this.slotname = 'b'
      } else {
        this.slotname = 'a'
      }
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    console.log(this.$el.children[1])
    console.log(this.$el.children[1].getAttribute('name'))
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
