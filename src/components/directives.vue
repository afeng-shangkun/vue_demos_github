<template>
<div>
<h1>Vue中系统指令学习</h1>
<div v-text="message">
</div>
<div v-html="message">
</div>
<div v-if="age>40">
  v-if:当isShow为true的时候，这个div显示
</div>
<div v-else>
当isShow为false的时候，这个div显示
</div>
<div v-show="isShow">
v-show:当isShow为true的时候，这个div显示
</div>

<div>
<ul>
<li v-for="(value,key,index) in person" v-bind:key="key">
 {{key}}:{{value}} {{index}}
</li>
</ul>
</div>
<hr/>
<a v-bind:href="baidu">baidu</a>
<p  :class="a1">this is a p tag!</p>
<hr/>
<h3>双向数据绑定</h3>
<table>
<tr>
<td>请输入用户名：</td>
<td><input type="text" v-model="username"/></td>
</tr>
<tr>
<td>用户名：</td>
<td>{{username}}</td>
</tr>
</table>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: '<h1 class="a">v-html和v-text之间的区别</h1>',
      isShow: true,
      age: 30,
      hobbies: ['爬山', '跑步', '键走'],
      person: {'name': '刘华', 'age': 23},
      baidu: 'http://www.sohu.com',
      a1: 'a',
      b: 'b',
      isred: true,
      username: '刘华'

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
<style scope>
/* @import url(); 引入css类 */
.a{
  color:red;
  width: 100px;
  height: 100px;
  border:1px solid yellow
}
.b{
  color:blue
}

h1{
  color:red;
}
ul li{
  list-style: none;
}
</style>
