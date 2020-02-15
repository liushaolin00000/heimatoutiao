import request from "@/network/request.js"

    export function login(form){
        return request({
            url:'/login',
            method:'POST',
            data:form
        })
    }
