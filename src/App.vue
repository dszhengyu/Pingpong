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
    <el-row v-if="!userInfo">
      <el-input v-model="email" placeholder="email address"></el-input>
      <el-input v-model="password" placeholder="password"></el-input>
      <el-button @click.native="register">Register</el-button>
      <el-button @click.native="login">Login</el-button>
    </el-row>
    <el-row v-if="userInfo">
      <i class="el-icon-message">{{userInfo.email}}</i>
      <el-button @click.native="logout">Logout</el-button>
    </el-row>

    <transition name="fade" mode="out-in">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
  import Dog from './Dog.vue'
  export default {
    data() {
      return {
        msg: 'Use Vue 2.0 Today!',
        wilddogData: {},
        pingContent: '',
        email: '',
        password: '',
      }
    },
    computed: {
      userInfo: function() {
        return Dog.userInfo;
      }
    },
    methods: {
      ping() {
        console.log("ping ", this.pingContent);
      },
      login() {
        console.log("login before, user ", Dog.userInfo)
        Dog.auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
          console.log("login complete, user " , user);
          this.$notify({
            title: 'Login Success',
            message: "Welcome Back!",
            duration: 2000,
            type: "success"
          })
        }).catch((err) => {
          console.error(err)
          this.$notify({
            title: 'Login Fail',
            message: err.message,
            duration: 6000,
            type: "error",
            onClose: function() {location.reload()}
          })
        })
        console.log("userInfo", this.userInfo)
      },
      register() {
        console.log("register")
        Dog.auth.createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          console.log("register complete, user " , user);
          this.$notify({
            title: 'Register Success',
            message: "Welcome!",
            duration: 2000,
            type: "success"
          })
        }).catch((err) => {
          console.error(err)
          this.$notify({
            title: 'Register Fail',
            message: err.message,
            duration: 6000,
            type: "error",
            onClose: function() {location.reload()}
          })
        })
      },
      logout() {
        console.log("logout before, user", Dog.userInfo)
        Dog.auth.signOut().then(() => {
          console.log("logout complete");
          this.$notify({
            title: 'Logout Success',
            message: "Do Come Back Soon!",
            duration: 2000,
            type: "success"
          })
        }).catch((err) => {
          console.error(err)
          this.$notify({
            title: 'Logout Fail',
            message: err.message,
            duration: 6000,
            type: "error",
            onClose: function() {location.reload()}
          })        
        })
      }
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