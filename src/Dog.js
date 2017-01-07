import wilddog from 'wilddog'

var config = {
syncURL: "https://pingpong.wilddogio.com",
authDomain: "https://pingpong.wilddogio.com"
}

var ref; 
console.log("ref ref")
if (ref == null) {
    var config = {
        syncURL: "https://pingpong.wilddogio.com",
    }
    console.log("ref is null")
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref();
    console.log(ref);
}


var auth;
console.log("auth")
if (auth == null) {
    console.log("auth is null")
    var config = {
        authDomain: "pingpong.wilddog.com"
    }
    wilddog.initializeApp(config);
    auth = wilddog.auth();
    console.log(auth);
}

export default {ref: ref, auth: auth}
