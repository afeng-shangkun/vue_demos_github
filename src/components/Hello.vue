<template>
  <div id="div23">
    <h1 ref="hello">this is a frist page!</h1>
    <h2>{{ message }}</h2>
    <h3>{{ hobbies[2] }}</h3>
    {{2+3}}
    {{2*3}}
    {{23%3}}
    {{6>7?6:7}}
    {{message.split('').reverse().join('')}}<br/>
    {{message.substr(2,3)}}<br/>
    {{isShow?true:false}}
    {{sayHello()}}
    <hr/>
    <button @click="sayHello" class="btn btn-primary">sayHello</button>
    <button @click="change_message('前端专业班')">改变数据</button>
    <button class="btn btn-success">success</button>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
console.log($)
export default {
  data () {
    return {
      message: 'hello,vue.js!',
      hobbies: ['爬山', '跑步', '键走'],
      isShow: false
    }
  },
  address: '北京昌平',
  methods: {
    sayHello: function () {
      console.log('hello2,vue.js2!')
      return 'OK'
    },
    change_message: function (newMesage) {
      this.message = newMesage
      console.log(this.$el)
      console.log(this.$data)
      console.log(this.$options)
      this.$options.methods['sayHello']()
      console.log(this.$options.address)
      console.log(this.$refs.hello)
      console.log(this.$parent)
      console.log(this.$children)
      console.log(this.$root)
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 30px;
  color: red;
}
</style>
