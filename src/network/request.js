import axios from 'axios'

export function request(config) {
    // 创建实例，否则为全局
    const ins = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    // 拦截请求
    ins.interceptors.request.use(config => {
        return config
    }, err => {
        
    })

    // 拦截响应
    ins.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err)
    })

    // 返回实例，为Promise对象,可调用then(),catch()
    return ins(config)
}