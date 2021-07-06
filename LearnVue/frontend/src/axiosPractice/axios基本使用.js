import Axios from 'axios'

// --------------------- 1. 基本请求 ---------------------
Axios({
  url: 'blablabla',
  method: 'POST',
  params: {
    name: 'Lorena'
  }
}).then (res => {
  console.log(res);
})

// --------------------- 2. 发送并发请求：all函数 ---------------------
Axios.all([
  Axios({
    url: 'request2',
    method: 'GET',
    params: {
      name: 'Lorena'
    }
  }),
  Axios({
    url: 'request3',
    method: 'POST',
    params: {
      name: 'Lorena'
    },
    data: {
      password: '123'
    }
  })
]).then(Axios.spread((res1, res2) => {
  console.log(res1, res2);
}))

// --------------------- 3. 创建独立的axios实例：有不同的配置---------------------
const instance1 = Axios.create({
  baseURL: '111.111.11.11:8000',
  timeout: 5000
})

const instance2 = Axios.create({
  baseURL: '222.222.22.22:8000',
  timeout: 864000
})

instance1({
  url: 'home/helloWorld',
  params: {
    name: 'lorena'
  }
}).then(res => {
  console.log(res);
})
