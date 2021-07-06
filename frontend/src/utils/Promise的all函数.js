/**
 * Promise的all方法使用：同时管理多个异步请求
 * *** 场景：比如有个页面需要两个异步请求都返回成功之后再渲染
 * 1. 传入数组：其中传入多个用于封装不同异步请求的Promise对象
 * 2. 回调中的result参数为一个数组，存储了所有异步操作的结果：index0为第一个异步操作的结果，index1为第二个异步操作的结果，以此类推
 *
 * 如果不用Promise，可能每个Ajax请求都得自己维护一个boolean变量 & 一个handle方法，每个请求成功后修改bool变量，并且调用handle方法，
 * 看看是不是所有请求都已经成功了
 */

Promise.all([
  new Promise((resolve => {
    setTimeout(() => {
      resolve('第一个请求');
    }, 2000)
  })),
  new Promise((resolve => {
    setTimeout(() => {
      resolve('第二个请求');
    }, 1000)
  }))
]).then(results => {
  console.log(results);
})
