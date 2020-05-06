<template>
  <div id="div23">
    <h1 ref="hello">this is a frist page!</h1>
    {{$store.state.count}}
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
    <my-logo :title='title'></my-logo>
    <router-link :to="{name:'DiDataBind',query:{id:5,name:'czf'}}">query DiDataBind</router-link>
    <button @click="showStu(5)">显示学生信息</button>
    <hr/>
    <router-link :to="{name:'DiDataBind',params:{id:5,name:'czf'}}">params DiDataBind</router-link>
  </div>
</template>
<script>
// 引入Logo组件
import MyLogo from '@/components/Logo'
// 声明组件
export default {
  components: {
    MyLogo: MyLogo
  },
  data () {
    return {
      message: 'hello,vue.js!',
      hobbies: ['爬山', '跑步', '键走'],
      isShow: false,
      title: '给子组件传递数值！'
    }
  },
  address: '北京昌平',
  methods: {
    sayHello: function () {
      console.log('hello2,vue.js2!')
      return 'OK'
    },
    showStu: function (val) {
      this.$router.push({
        name: 'DiDataBind',
        query: {
          'id': val
        }
      })
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
