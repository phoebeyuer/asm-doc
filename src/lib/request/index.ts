import { ref } from 'vue'
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

const { VITE_APP_BASE_URL } = import.meta.env

const request = axios.create({
  baseURL: VITE_APP_BASE_URL as string,
  timeout: 15 * 1000,
})

// 错误处理
const errorHandler = (error: AxiosError) => {
  const status = error.response?.status
  switch (status) {
    case 400:
      error.message = '请求错误'
      break
    case 401:
      // 处理登出
      // useStore.logout();
      error.message = '未授权，请登录'
      break
    case 403:
      error.message = '拒绝访问'
      break
    case 404:
      error.message = `请求地址出错: ${error.response?.config.url}`
      break
    case 408:
      error.message = '请求超时'
      break
    case 500:
      error.message = '服务器内部错误'
      break
    case 501:
      error.message = '服务未实现'
      break
    case 502:
      error.message = '网关错误'
      break
    case 503:
      error.message = '服务不可用'
      break
    case 504:
      error.message = '网关超时'
      break
    case 505:
      error.message = 'HTTP版本不受支持'
      break
    default:
      break
  }
  return Promise.reject(error)
}

// 请求拦截
request.interceptors.request.use((config): AxiosRequestConfig<any> => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  return config
}, errorHandler)

// 响应拦截
request.interceptors.response.use((response: AxiosResponse) => {
  const dataAxios = response.data
  const { code, msg } = dataAxios
  if (code === undefined) {
    return dataAxios
  }
  switch (code) {
    case 0:
      // code === 0 代表没有错误
      return dataAxios.data
    case 1:
      // code === 1 代表请求错误
      throw Error(msg)
    case 401:
      // 处理登出
      // useStore.logout();
      throw Error(msg)
    default:
      // 不是正确的 code
      return '不是正确的code'
  }
}, errorHandler)

export default request

export interface RequestConfig {
  successMessage?: string
  errorMessage?: string
  immediate?: boolean
}

export function useRequest<T>(axiosConfig: AxiosRequestConfig, requestConfig?: RequestConfig) {
  // 返回的数据
  const data = ref<T>()
  const error = ref<Error>()
  // 请求状态
  const loading = ref(false)
  // 立即发送请求
  const immediate = requestConfig?.immediate !== false
  // 终止请求
  const { CancelToken } = axios
  const { token, cancel } = CancelToken.source()
  // 合并请求配置
  const config = { ...axiosConfig, CancelToken: token }

  // 请求promise
  function run() {
    loading.value = true
    return request<T>(config)
      .then((res: T) => {
        data.value = res
      })
      .catch((err: Error) => {
        error.value = err
        if (requestConfig?.errorMessage) {
          throw Error(requestConfig.errorMessage)
        }
      })
      .finally(() => {
        loading.value = false
      })
  }

  const content = new Promise((resolve, reject) => {
    if (immediate) {
      run()
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    }
  })

  return { data, error, loading, content, run, cancel }
}
