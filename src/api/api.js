import http from "../utils/http"

// 登录
export const loginApi = (params) => http.post("/login", params)

// 登出
export const logoutApi = () => http.post("/logout")
