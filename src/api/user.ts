import request from '../utils/request'

export function loginFun(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}