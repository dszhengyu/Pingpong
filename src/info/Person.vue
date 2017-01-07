<template>
  <div id="info-person">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'In Info-Person'
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
      console.log("Info-Person: I am loaded")
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
