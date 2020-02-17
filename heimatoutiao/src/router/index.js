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
const EditData = function(){
  return import('@/views/EditData.vue')
}
const myFocus = function(){
  return import('@/views/personal/myFocus.vue')
}
const myComments = function(){
  return import('@/views/personal/myComments.vue')
}
const myFavorite = function(){
  return import('@/views/personal/myFavorite.vue')
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
    },
    {
      path:"/editData",
      component:EditData
    },
    {
      path:"/myFocus",
      component:myFocus
    },
    {
      path:"/myComments",
      component:myComments
    },
    {
      path:"/myFavorite",
      component:myFavorite
    },
    
  ],
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  const hasToken = localStorage.getItem("token")
  // console.log(to.path)
  if(to.path === "/personal"||to.path === "/editData"){
    // console.log(123)
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