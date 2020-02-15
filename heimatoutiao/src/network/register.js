import request from "@/network/request.js"

export function register(form) {
  return request({
    url: '/register',
    method: 'POST',
    data: form
  })
}
