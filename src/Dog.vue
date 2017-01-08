<script>
  import wilddog from 'wilddog'
  import Vue from "vue"
  export default new Vue({
    data() {
      return {
        ref: null,
        refConfig: {
            syncURL: "https://pingpong.wilddogio.com",
        },
        auth: null,
        authConfig: {
            authDomain: "pingpong.wilddog.com"
        },
        uid: null,
        user: null,
        pingOwn: null,
        pingList: null,
        pong: null,
        peer: null,
        userInfo: null
      }
    },
    computed: {
        isCurrentUserNull: function() {
            console.log("is current user null or not, ", this.userInfo)
            return (this.userInfo == null)
        }
    },
    methods: {
        initRef: function() {
            if (this.ref == null) {
                console.log("ref is null, init it");
                wilddog.initializeApp(this.refConfig);
                this.ref = wilddog.sync().ref();
                console.log("ref is", this.ref)
            }
        },
        initAuth: function() {
            if (this.auth == null) {
                console.log("auth is null, init it")
                wilddog.initializeApp(this.authConfig);
                this.auth = wilddog.auth();
                console.log("vue auth is ", this.auth);
            }
        },
        getUid: function() {
            console.log("get uid, user", this.auth.currentUser)
            return this.auth.currentUser.uid;
        },
        setData: function() {
            if (this.isCurrentUserNull) {
                console.log("current user is null")
                this.emptyData();
                return;
            }
            console.log("set data");
            let uid = this.userInfo.uid;
            this.uid = uid;
            this.user = this.ref.child("user").child(uid);
            this.peer = this.ref.child("peer").child(uid);
            this.pingOwn = this.ref.child("ping/own");
            this.pingList = this.ref.child("ping/list");
            this.pong = this.ref.child("pong");
            this.peer = this.ref.child("peer").child(uid);
        },
        emptyData: function() {
            console.log("empty data");
            this.uid = null;
            this.user = null;
            this.peer = null;
            this.pingOwn = null;
            this.pingList = null;
            this.pong = null;
            this.peer = null;
        }
    },
    created: function () {
      console.log("dog created")
      //初始化ref和auth
      this.initRef();
      this.initAuth();
      this.setData();

      //注册回调函数
      this.auth.onAuthStateChanged(() => {
        console.log("on auth state change")
        this.userInfo = this.auth.currentUser
        this.setData();
      })
    }
  })
</script>