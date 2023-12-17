import axios from "axios"
import { Loading } from "element-ui"
let loadingTime

const instance = axios.create({
  baseURL: "http://back.9yuecloud.com/admin",
  timeout: 1000 * 5,
  Headers: {
    "Content-type": "application/json; charset=utf-8"
  },
  withCredentials: false
})

instance.interceptors.request.use(
  (config) => {
    loadingTime = Loading.service({ fullscreen: true, text: "加载中", target: ".el-main" })
    let token = sessionStorage.getItem("token")
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    loadingTime.close()
    return res.data
  },
  (err) => {
    loadingTime.close()
    return Promise.reject(err)
  }
)

export default instance
