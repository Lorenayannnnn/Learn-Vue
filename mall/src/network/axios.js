import Axios from 'axios'
import {Loading, Message} from 'element-ui'

var loading = null;

export default function sendRequest(config) {
  // 创建axios实例并进行配置
  const axios = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    timeoutErrorMessage: 'Request timeout. Please try again later.'
  })
  // 拦截器配置
  axios.interceptors.request.use(config => {
    loading = Loading.service({
      lock: true,
      text: '首次加载稍慢，请稍后...',
      spinner: 'el-icon-loading',
      background: 'white'
    });
    return config;
  })
  axios.interceptors.response.use(response => {
    loading.close();
    return Promise.resolve(response.data);
  }, error => {
    Message.error('Error. Please contact admin.');
    console.log(error);
    return Promise.reject(error);
  })
  // 发送请求
  return axios(config);
}
