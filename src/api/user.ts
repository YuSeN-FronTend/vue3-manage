import request from '../utils/request'

export function loginFun(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}
export function registerFun(data: any) {
    return request({
        url: '/user/register',
        method: 'post',
        data: data
    })
}

export function getDataFun(data: any) {
    return request({
        url: '/getData',
        method: 'post',
        data: data
    })
}