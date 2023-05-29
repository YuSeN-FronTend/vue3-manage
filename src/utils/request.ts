import axios from 'axios'
const request = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 5000
})
request.interceptors.request.use(
    (config) => {
        let token = JSON.parse(String(sessionStorage.getItem('userInfo')))?.token;
        if(token) {
            config.headers['authorization'] = token
        }
        return config
    },
    (error) => {
        console.log(error);
        Promise.reject(error)
    }
)
request.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res) {
            console.log(res);
            // 这个是后台自定义的code哦，不是http里的状态码哦
            if (res.code !== 200) {
                // 在这里处理异常，如res.code===50008 token失效重置token等等
                
                
            }
            return response
        } else {
            return Promise.reject("error");
        }
    },
    (error) => {
        // 接口返回数据异常信息
        console.log(error);
        
    }
)
export default request;