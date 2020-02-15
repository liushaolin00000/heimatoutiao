<template>
  <div class="container">
    <i class="iconfont icon-cuohao chahao"></i>
    <div class="logos">
      <i class="iconfont icon-toutiao logo"></i>
    </div>

    <!-- <br /> -->
    <!-- <input type="text" placeholder="密码" />
    <br />-->
    <CnpInput placeholder="用户名/手机号码" @inputs="hanleInputsun" :rule="/^1[0-9]{4,11}$/" errms='手机格式错误,位数为4至11位数'></CnpInput>
    <CnpInput placeholder="密码" @inputs="hanleInputspw" 
    :rule="/^1[0-9]{2}$/" 
    errms='密码格式错误，位数为3位数'></CnpInput>
    <a href="/register">还没有账号？点击去注册个账号吧</a>
    <div class="btn" @click="handleLoginBtn">登录</div>
  </div>
</template>

<script >
import CnpInput from "@/components/CnpInput";
const login = require('@/network/login.js')
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    CnpInput
  },
  methods: {
    handleLoginBtn() {
      login.login(this.form).then(res=>{
      
      })
    },
    hanleInputsun(e) {
      this.form.username = e;
    },
    hanleInputspw(e) {
      this.form.password = e;
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