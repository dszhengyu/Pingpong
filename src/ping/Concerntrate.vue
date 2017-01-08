<template>
  <div id="concerntrate">
    <h1>{{ msg }}</h1>
    <h1>uid: {{ dog.uid }}</h1>
  </div>
</template>

<script>
  import Dog from '../Dog.vue'
  export default {
    data() {
      return {
        msg: 'In Ping-Concerntrate',
        dog: Dog
      }
    },
    methods: {
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>