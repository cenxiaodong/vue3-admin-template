import axios from 'axios'
import { message } from 'ant-design-vue'
import qs from 'qs'

const https = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 120000
})

// 请求拦截器
https.interceptors.request.use(
  (config) => {
    // if (config.method == 'post') {
    //   if (config.upType == 'UpImg') {
    //     config.headers['Content-Type'] = 'multipart/form-data'
    //   } else if (config.contentType == 'json') {
    //     config.headers['Content-Type'] = 'application/json'
    //   } else {
    //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    //     config.data = qs.stringify(config.data || config.params)
    //   }
    // }
    // const _Token = window.zeroSDK ? window.zeroSDK.getAuthToken() : localStorage._Token || ''
    // if (_Token) {
    //   config.headers.token = _Token
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
https.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response.data
    }
    // 请求失败 提示
    message.error('This is an error message')
  },
  (error) => {
    if (error.response?.status == 401) {
      // token过期
    } else {
      message.error('服务异常')
    }
    return Promise.reject(error)
  }
)
export default https
