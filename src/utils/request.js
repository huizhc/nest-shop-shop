import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'
import router from '@/router'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (config.method == 'post' && config.data) {
    //   let form = new FormData()
    //   Object.keys(config.data).forEach(v => {
    //     form.append(v, config.data[v]);
    //   })
    //   config.data = form
    // }
    if (store.getters.token) {
      config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')// 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res && res.code !== 200 || !res.success) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.data.flush || res.data.back) {
        return Promise.reject(res.data)
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    if (error.message === "Request failed with status code 401") {
      MessageBox.confirm('您还未登录，是否去登录', '提示', {
        confirmButtonText: '去登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('resetToken').then(() => {
          router.push('/pass/login?redirect=' + encodeURIComponent(location.href))
        })
      })
    }
    return Promise.reject(error)
  }
)

export default service
