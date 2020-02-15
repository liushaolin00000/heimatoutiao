import {
  request
} from "@/network/request.js"

export function psDetail() {
  return request({
    url: '/user/'+localStorage.getItem('userId'),
    headers:{
        Authorization:localStorage.getItem('token')
    },
    method: 'GET',
  })
}
