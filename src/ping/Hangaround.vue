<template>
  <div id="ping-around">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'In Ping-Hangaround'
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  },
  created: function() {
      console.log("Hangaround: I am loaded")
      //获取所有人的动态
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
