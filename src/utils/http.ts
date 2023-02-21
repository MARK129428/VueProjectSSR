import axios, { 
  CreateAxiosDefaults,
  AxiosRequestConfig, 
  InternalAxiosRequestConfig,
  AxiosResponse
} from "axios";

const defaultConfig : CreateAxiosDefaults = {
  timeout: 5000,
  baseURL: '',
}


class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }
  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use((config : InternalAxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })    
  }

  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use((response : AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  public httpRequestGet<T>(url : string, params : AxiosRequestConfig) : Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  public httpRequestPost<T>(url : string, params : AxiosRequestConfig) : Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => res.data).catch()
  }
}

export const http = new Http()