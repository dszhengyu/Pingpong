<template>
  <div id="app">
    <el-row>
      <el-col :span="16">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router=true>
          <el-submenu index="/ping/concerntrate">
            <template slot="title">Ping</template>
            <el-menu-item index="/ping/concerntrate">Concerntrate</el-menu-item>
            <el-menu-item index="/ping/mine">Mine</el-menu-item>
            <el-menu-item index="/ping/hangaround">Hangaround</el-menu-item>
          </el-submenu>
          <el-menu-item index="/peer">Peer</el-menu-item>
          <el-menu-item index="/info/mine">Info</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-input v-model="pingContent" placeholder="input your ping"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click.native="ping">ping</el-button>
      </el-col>
    </el-row>
    <el-row v-if="!logined">
      <el-input v-model="email" placeholder="email address"></el-input>
      <el-input v-model="password" placeholder="password"></el-input>
      <el-button @click.native="register">Register</el-button>
      <el-button @click.native="login">Login</el-button>
    </el-row>
    <el-row v-if="logined">
      <i class="el-icon-message">{{logined.email}}</i>
      <el-button @click.native="logout">Logout</el-button>
    </el-row>

    <transition name="fade" mode="out-in">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
  import Dog from './Dog.js'
  export default {
    data() {
      return {
        msg: 'Use Vue 2.0 Today!',
        wilddogData: {},
        pingContent: '',
        email: '',
        password: '',
        logined: null
      }
    },
    computed: {
    },
    methods: {
      startHacking() {
        this.$notify({
          title: 'It Works',
          message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
          duration: 6000
        })
      },
      writeIntoWilddog() {
        console.log(this.input)
        this.ref.set({
          "have a try": this.input
        })
      },
      ping() {
        console.log("ping ", this.pingContent);
      },
      login() {
        console.log("login before, user ", Dog.auth.currentUser)
        Dog.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
          console.log("login complete, user " , user);
        }).catch(function (err) {
          console.error(err)
        })
        console.log("logined", this.logined)
      },
      register() {
        console.log("register")
        Dog.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
          console.log("register complete, user " , user);
        }).catch(function (err) {
          console.error(err)
        })
        console.log("logined", this.logined)
      },
      logout() {
        console.log("logout before, user", Dog.auth.currentUser)
        Dog.auth.signOut().then(function () {
          console.log("logout complete");
        }).catch(function (err) {
          console.error(err)
        })
      }
    },
    created: function() {
      Dog.auth.onAuthStateChanged(() => {
        this.logined = Dog.auth.currentUser;
      })
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.ping-input {
  height: 60px;
}
</style>