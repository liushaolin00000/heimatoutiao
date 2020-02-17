import axios from 'axios'
import { Toast } from 'vant';
import router from '../router';
export function request(config) {
  const intance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  })
  //axios响应拦截器
  intance.interceptors.response.use(res=>{
    // console.log(res)
      if(res.data.statusCode===401){
        Toast.fail(res.data.message);
        router.push('/login')
        return res
      }else{
        Toast.success(res.data.message)
        return res
      }
  })
  return intance(config)
}
