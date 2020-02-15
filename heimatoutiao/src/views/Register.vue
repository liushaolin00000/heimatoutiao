<template>
  <div class="container">
    <i class="iconfont icon-cuohao chahao"></i>
    <div class="logos">
      <i class="iconfont icon-toutiao logo"></i>
    </div>

    <!-- <br /> -->
    <!-- <input type="text" placeholder="密码" />
    <br />-->
    <CnpInput placeholder="用户名/手机号码" @inputs="hanleInputsun" :rule="/^1[0-9]{4,11}$/" errms='手机格式错误，位数为七位数'></CnpInput>
    <CnpInput placeholder="密码" @inputs="hanleInputspw" 
    :rule="/^1[0-9]{2}$/" 
    errms='密码格式错误，位数为三位数'></CnpInput>
    <CnpInput placeholder="昵称" @inputs="hanleInputncn" 
    :rule="/^[a-zA-Z0-9_]{3,16}$/" 
    errms='昵称格式错误，最少4位数,不包含中文'></CnpInput>
    <a href="/login">已经注册账号了？点击去登录</a>
    <div class="btn" @click="handleLoginBtn">登录</div>
  </div>
</template>

<script >
import CnpInput from "@/components/CnpInput";
const register = require('@/network/register.js')
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        nickname:""
      }
    };
  },
  components: {
    CnpInput
  },
  methods: {
    handleLoginBtn() {
      register.register(this.form).then(res=>{
        console.log(res)
      })
    },
    hanleInputsun(e) {
      this.form.username = e;
    },
    hanleInputspw(e) {
      this.form.password = e;
    },
    hanleInputncn(e){
      this.form.nickname = e;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 20/360 * 100vw;
  .chahao {
    font-size: 27/360 * 100vw;
  }
  .logos {
    width: 100%;
    text-align: center;
    margin: 60px 0;
    .logo {
      color: red;
      font-size: 100/360 * 100vw;
    }
  }

  .btn {
    width: 100%;
    background-color: #cc3300;
    color: white;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-top: 80px;
    border-radius: 30px;
    
  }
  a{
    float: right;
   
  }
}
</style>