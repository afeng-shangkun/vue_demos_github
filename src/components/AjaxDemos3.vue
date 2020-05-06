<template>
<div>
<select id="province"  v-model="p">
<option v-for="p1 in provinces" v-bind:key="p1" :value="p1">
 {{p1}}
 </option>
</select>

 <select id="city">
 <option v-for="city in citys" v-bind:key="city" :value="city">
 {{city}}
 </option>
</select>

</div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: {},
      provinces: [],
      citys: [],
      p: ''

    }
  },
  watch: {
    p: function () {
      // array.forEach(function(currentValue, index, arr), thisValue)
      this.ajaxData.forEach(function (currentValue, index, arr) {
        for (let key in currentValue) {
          if (key === this.p) {
            this.citys = currentValue[key]
            break
          }
        }
      }, this)
    }
  },
  methods: {

  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.$axios({
      url: 'http://localhost:3000/api/province',
      method: 'get'
    }).then(resp => {
      this.ajaxData = resp.data
      // console.log(this.ajaxData)
      for (var t = 0; t < this.ajaxData.length; t++) {
        // console.log(this.ajaxData[t])
        for (let key in this.ajaxData[t]) {
          // console.log(key)
          this.provinces.push(key)
        }
      }
      // 设置默认第二个下拉列表框
      for (let key in this.ajaxData[0]) {
        this.p = key
        this.citys = this.ajaxData[0][key]
        break
      }
    })
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
