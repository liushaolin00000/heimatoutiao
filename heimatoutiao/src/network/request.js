import axios from 'axios'
import { Toast } from 'vant';
export default function request(config) {
  const intance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  })
  //axios响应拦截器
  intance.interceptors.response.use(res=>{
      if(res.data.statusCode===401){
        Toast.fail(res.data.message);
      }else{
        Toast.success(res.data.message)
      }
  })
  return intance(config)
}
