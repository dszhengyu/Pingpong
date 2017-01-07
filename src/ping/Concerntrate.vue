<template>
  <div id="concerntrate">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
  import Dog from '../Dog.js'
  export default {
    data() {
      return {
        msg: 'In Ping-Concerntrate'
      }
    },
    methods: {
      startHacking() {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      }
    },
    created: function () {
      //指定一下能够读取的权限
      console.log(Dog.ref)
      //获取关注的人的动态
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>