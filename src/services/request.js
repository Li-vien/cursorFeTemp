import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  // 根据您的实际需求配置基础URL
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如：添加 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const { data } = response
    // 这里可以根据您的后端接口返回格式进行适当的处理
    return data
  },
  (error) => {
    // 对响应错误做点什么
    const { response } = error
    if (response) {
      // 根据不同的错误状态码进行不同的处理
      switch (response.status) {
        case 401:
          // 未授权，跳转到登录页
          // router.push('/login')
          break
        case 403:
          // 权限不足
          console.error('权限不足')
          break
        case 404:
          // 请求的资源不存在
          console.error('请求的资源不存在')
          break
        case 500:
          // 服务器错误
          console.error('服务器错误')
          break
        default:
          console.error('网络错误')
      }
    } else {
      // 网络错误或者请求被取消
      console.error('网络错误或请求被取消')
    }
    return Promise.reject(error)
  }
)

export default request 