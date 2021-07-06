/**
 * Promise的基本使用：
 * 1. 基本链式结构：resolve, reject
 * 2. Promise的简写：return new Promise --> return Promise.resolve()/reject() --> return 'data message'
 */


// 1. Promise的基本使用 & 结构
// Promise的链式调用 && Promise简写1 && 简写2！！！

new Promise(((resolve, reject) => {

  // 1. 网络请求到aaa数据
  setTimeout(() => {
    resolve('aaa')
  }, 1000)

})).then(res => {

  // 1. 自己处理代码
  console.log('第一层处理代码', res)

  // 2. 对结果进行第一次处理
  // return new Promise(resolve => {
  //   resolve(res + '111');
  // })
  // 简写1 ！！！
  return Promise.resolve(res + '111');
  // return Promise.reject('error message');
  // 也可以：
  // throw 'error message';
}).then(res => {

  console.log('第二层处理代码', res);
  // return new Promise(resolve => {
  //   resolve(res + '222');
  // })

  // 简写2 ！！！
  return res + '222';

}).catch(err => {

})

// 另一种写法: then中添加两个回调函数，而非then & catch分开
new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
    //reject('失败');
  })
})).then(data => {
  console.log(data);
}, error => {
  console.log(error)
})
