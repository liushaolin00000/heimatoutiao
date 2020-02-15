import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'
const Login = function(){
  return import('@/views/Login.vue')
}
const Register = function(){
  return import('@/views/Register.vue')
}
const Personal = function(){
  return import('@/views/Personal.vue')
}
Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/personal",
      component:Personal
    }
  ],
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  const hasToken = localStorage.getItem("token")
  console.log(to.path)
  if(to.path === "/personal"){
    console.log(123)
    if(hasToken){
      
      next()
    }else{
      Toast.fail('请使用正确的账号登录')
      next('/login')
    }
  }else{
    next()
  }
})

export default router