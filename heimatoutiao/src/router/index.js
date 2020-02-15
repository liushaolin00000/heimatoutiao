import Vue from 'vue'
import Router from 'vue-router'
const Login = function(){
  return import('@/views/Login.vue')
}
const Register = function(){
  return import('@/views/Register.vue')
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    }
  ],
  mode:'history'
})
