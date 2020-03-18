<template>
  <div>
    <div class="min-main" v-if="d">
      <div class="ztab">
        <span class="register" @click="toggle1">注册</span>
        <span class="login" @click="toggle2">登录</span>
      </div>
      <div class="lmain1">
        用户名：
        <input class="username" type="text" v-model.lazy="a" />
        密码：
        <input class="password" type="password" v-model.lazy="b" />
        <button class="btn2" @click="fn2">注册</button>
      </div>
      <div class="rmain1">
        用户名：
        <input class="username" type="text" v-model.lazy="a2" />
        密码：
        <input class="password" type="password" v-model.lazy="b2" />
        <button class="btn2" @click="fn3">登录</button>
      </div>
    </div>
    <Tip class="tip"></Tip>
    <User v-if="e"></User>
  </div>
</template>

<script>
import Tip from "./Tip.vue";
import User from "./User";
import axios from "axios";
export default {
  components: {
    Tip,
    User
  },
  data() {
    return {
      a: "",
      b: "",
      a2: "",
      b2: "",
      d:true,
      e:false
    };
  },
  methods: {
    async fn2() {
      if (this.a === "" || this.b === "") {
        this.$eventbus.$emit("fn2", "用户名及密码不能为空");
        // console.log("用户名及密码不能为空");
      } else {
        var { data } = await axios.get("http://localhost:3000/user");
        var index = data.findIndex(item => item.username === this.a);
        if (index === -1) {
          var { data } = await axios.post(
            "http://localhost:3000/user?",
            "username=" + this.a + "&password=" + this.b
          );
          this.$eventbus.$emit("fn1", "注册成功");
          this.$router.push("/");
        } else {
          this.$eventbus.$emit("fn2", "用户名已被占用");
        }
      }
    },
    toggle1() {
      $(".register").css({ background: "white", color: "gray" }),
        $(".login").css({ background: "black", color: "white" }),
        $(".rmain1").css({ display: "none" }),
        $(".lmain1").css({ display: "block" });
    },
    toggle2() {
      $(".login").css({ background: "white", color: "gray" }),
        $(".register").css({ background: "black", color: "white" }),
        $(".lmain1").css({ display: "none" }),
        $(".rmain1").css({ display: "block" });
    },
    async fn3() {
      if (this.a2 === "" || this.b2 === "") {
        this.$eventbus.$emit("fn2", "用户名及密码不能为空");
        // console.log("用户名及密码不能为空");
      } else {
        var { data } = await axios.get(
          "http://localhost:3000/user?username" +
            this.a2 +
            "&password=" +
            this.b2
        );
        if (data.length === 0) {
          this.$eventbus.$emit("fn2", "用户名及密码错误");
        } else {
          sessionStorage.setItem('username',this.a2)
          this.$eventbus.$emit("fn1", "登录成功");
          setTimeout(()=>{
          this.$router.push("/");
         }, 3000)
        }
      }
    }
  },
  mounted(){
    if( sessionStorage.getItem('username') ){
      this.d=false
      this.e=true
    }else{
      this.d=true
      this.e=false
    }
  }
};
</script>


<style lang="scss" scoped>
.min-main {
  width: 6rem;
  height: 5rem;
  background-color: black;
  margin-left: 10%;
  margin-top: 30%;
  position: relative;
  .ztab {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 1rem;
    .register {
      display: inline-block;
      width: 49%;
      height: 80%;
      background: white;
      text-align: center;
      font-size: 30px;
      color: gray;
    }
    .login {
      display: inline-block;
      width: 49%;
      height: 80%;
      font-size: 30px;
      background: black;
      text-align: center;
      color: white;
    }
  }
}
.lmain1 {
  position: absolute;
  top: 1rem;
  left: 0;
  color: white;
  line-height: 30px;
  .username,
  .password {
    width: 98%;
    height: 1rem;
    border: 1px solid black;
  }
}
.rmain1 {
  position: absolute;
  top: 1rem;
  left: 0;
  color: white;
  line-height: 30px;
  display: none;
  .username,
  .password {
    width: 98%;
    height: 1rem;
    border: 1px solid black;
  }
}
.btn2 {
  width: 2rem;
  height: 0.8rem;
  background-color: white;
  border: 1px solid white;
  font-size: 20px;
  line-height: 0.8rem;
  margin-left: 30%;
}
</style>