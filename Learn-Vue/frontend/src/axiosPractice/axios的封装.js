/**
 * Axios的封装：
 * 1. 外部用的时候传入自定义的success & failure回调函数。
 * 2. 用promise：创建axios实例，发送网络请求（异步操作），然后返回Promise对象。外部只用正常的then & catch进行数据处理即可
 */

import axios from 'axios'

export default function myAxiosRequest(config) {
  return new Promise(((resolve, reject) => {
    // 创建axios实例
    const instance1 = axios.create({
      baseURL: '111.111.11.11:8000',
      timeout: 5000
    })
    // 用传进来的config内容那个发送网络请求
    // instance1(config)
    //   .then(res => {
    //     resolve(res);
    //   }).catch(err => {
    //     reject(err);
    // })
    return instance1(config);
  }))
}

// 外部发送请求时，先import，然后：
myAxiosRequest({
  url: 'home/category',
  params: {
    keyword: 'red'
  }
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
