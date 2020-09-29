import axios from "axios"

const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/',
  withCredentials: true,
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
})


export const authAPI = {
  login(data: LoginParamsType) {
    return instance.post("auth/login", data)
  },
  logOut() {
    return instance.delete("auth/me")
  },
  authMe() {
    return instance.post("auth/me")
  },
}


//types

export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

export type FormErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
  captcha?: string
}

type ResponseType<D = {}> = {
  status: number
  statusText: string
  data: D
}

export type LoginResponseType = {
  avatar: string | undefined
  created: Date | null
  email: string | null
  isAdmin: boolean | null
  name: string | null
  publicCardPacksCount: number | null
  rememberMe: boolean | null
  token: string
  tokenDeathTime: number | null
  updated: Date | null
  verified: boolean | null
}