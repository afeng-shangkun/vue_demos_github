<template>
<div>
  <div id="a" v-bind:class='{blue:isblue,red:isred}' v-bind:style='{color:red,fontSize:fontsize}'>this is a div tag!</div>
<button @click='change_bg_color'>改变背景颜色</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      isblue: true,
      isred: false,
      width: '600px',
      red: 'white',
      fontsize: '48px'
    }
  },
  methods: {
    change_bg_color: function () {
      this.isblue = !this.isblue
      this.isred = !this.isred
    }
  },
  // 计算属性
  computed: {

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
#a{
width:300px;
height:300px;
}
.red{
background-color: red
}
.blue{
background-color: blue
}
</style>
