import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

// 1. 安装插件
Vue.use(Vuex);


// 2. 创建实例对象: 传入想管理的参数
const store = new Vuex.Store({
  state: {
    myCounter: 0,
    students: [
      {id: '01', name: 'Lorena', age: 19},
      {id: '02', name: 'Tenny', age: 19},
      {id: '03', name: 'haha', age: 20},
      {id: '04', name: 'hehe', age: 21}
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: modules
})

export default store;
