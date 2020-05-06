<template>
<div>
  <h1>这是一个子组件Child</h1>
  {{title}}<br />

  {{person.name}}<br />
  {{hobbies[2]}}<br />
  {{age}}
</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: 'Child  user name',
          age: 12,
          address: '北京昌平'
        }
      }
    },
    title: {
      type: String,
      default: 'title'
    },
    name: {
      type: String,
      default: 'name'
      // required: true
    },
    age: {
      type: Number,
      default: 12
    },
    person: {
      type: Object,
      default: () => {
        return {
          name: 'sfwew',
          age: 12,
          address: '北京昌平'
        }
      }
    },
    hobbies: {
      type: Array,
      default: () => {
        return [1, 2, 3, 4, 5, 6]
      }
    }

  },
  data () {
    return {
      title2: 'hello,I am Child component!'
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
</style>
