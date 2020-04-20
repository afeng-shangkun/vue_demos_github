<template>
<div >
<button v-on:click='sayHello'>sayHello</button>
<button @click.once='count=count+1'>count</button>
{{count}}
<a @click.prevent="setMessage('hello')" href="https://www.baidu.com">改变mesage</a>
{{message}}
<div class="a" @click.self="sayHello">
<div class="b">
</div>
</div>
<input @keydown.ctrl.shift="submit" type="text"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello,vue.js!',
      count: 1
    }
  },
  methods: {
    sayHello: function (e) {
      // alert('hello,vue.js!')
      this.message = 'vue.js中的事件处理'
      console.dir(e.target.tagName)
    },
    setMessage: function (message) {
      this.message = message
      // console.log(e.target.tagName)
      // e.preventDefault()
    },
    submit: function (e) {
      alert('ctrl+shift')
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
 .a{
width:300px;
height:200px;
background-color:red
 }
 .b{
width:100px;
height:100px;
background-color:yellow
 }

</style>
