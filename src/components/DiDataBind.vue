<template>
<div>
<h1>学习Vue中双向数据绑定</h1>
<h3>文本框</h3>
<input type="text" v-model='person.username'/><br/>
<h3>单选按钮</h3>
<label>女</label>
<input type="radio" value="female" v-model="person.gender"/>
<label>男</label>
<input type="radio" value="male" v-model="person.gender"/>
<h3>多选按钮</h3>
<input type="checkbox" value="游泳" v-model="person.hobbies"/>游泳
<input type="checkbox" value="爬山" v-model="person.hobbies"/>爬山
<input type="checkbox" value="跑步" v-model="person.hobbies"/>跑步
<input type="checkbox" value="玩游戏" v-model="person.hobbies"/>玩游戏
<h3>下拉列表框</h3>
<select v-model="person.identity">
<option value="请选择">请选择</option>
<option value="教师">教师</option>
<option value="警察">警察</option>
<option value="消防员">消防员</option>
<option value="学生">学生</option>
</select>
<div>
<h4>显示个人信息</h4>
username:{{person.username}}<br/>
gender:{{person.gender}}<br/>
hobbies:{{person.hobbies}}<br/>
identity:{{person.identity}}
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      person: {
        username: 'afeng',
        gender: 'female',
        hobbies: ['跑步', '玩游戏'],
        identity: '消防员'
      }

    }
  },
  methods: {
    change_username: function () {
      this.person.username = 'jack'
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

</style>
