/**
 * Axios拦截器的使用：
 * 1. 请求成功
 * 2. 请求失败
 * 3. response成功
 * 4. response失败
 */

import axios from 'axios'

// 请求拦截
axios.interceptors.request.use((config) => {
  console.log('请求拦截到success中');
  return config;
}, error => {
  console.log("请求错误");
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  console.log("获得response成功");

  if (response.data) {
    return Promise.resolve(response.data);
  } else if (response.data.code === 10001) {    // 比如如果用户没有登陆，后端返回10001
    if (response.config.url.indexOf('pc') > -1) {   //pc端
      alert('请先登录');
      location.href = 'pc/login'
    } else {
      alert('请先登录');
      location.href = 'mobile/login'
    }
  } else {
    return Promise.reject(response);
  }

}, error => {
  console.log("response错误");
  return Promise.reject(error);
})
