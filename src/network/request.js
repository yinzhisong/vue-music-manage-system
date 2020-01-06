import axios from 'axios';

export function request (config){
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://111.229.89.232:3000',
    timeout: 5000
  });
  
  // 2. axios 的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log("newtwork request, 拦截器的作用: ", err);
  });
  
  // 2.2 相应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log("newtwork request, 响应拦截: ", err);
  });
  
  // 3. 发送真正的网络请求
  return instance(config);
}