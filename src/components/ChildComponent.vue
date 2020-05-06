<template>
<div class="child" color="red">
  <h1>这是一个子组件！</h1>
  {{title}}
  <h2>子组件传递数据给父组件</h2>
  <h3>通过事件，在子组件上单击事件，传递数据给父组件</h3>
  <button @click="sendMSGToParent">发送数据给父组件</button>
  <h3>在子组件中定义一个插槽</h3>
  <button>按钮:<slot v-bind="user" name="mydefaultslot">{{user.name}}</slot></button>
  <p><slot name="myslot1"></slot></p>
  <div><slot name="myslot2"></slot></div>
   <div>A slot:<slot name="a"></slot></div>
   <div>B slot:<slot name="b"></slot></div>
</div>
</template>

<script>
export default {
  props: ['title'],
  inheritAttrs: false,
  data () {
    return {
      user: {
        name: 'child user'
      }
    }
  },
  methods: {
    sendMSGToParent: function () {
      // alert('Ok')
      this.$emit('listenToChildEvent', '这是子组件发送给父组件的数据！')
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    console.log(this.$el.getAttribute('class'))
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
.child {
  border: 1px solid red
}
</style>
