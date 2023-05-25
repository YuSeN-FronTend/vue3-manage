import axios from 'axios'

const request = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 5000
})
// request.interceptors.request.use(
//     (config) => {
//         console.log(config);
//         return config
//     }
// )
export default request;