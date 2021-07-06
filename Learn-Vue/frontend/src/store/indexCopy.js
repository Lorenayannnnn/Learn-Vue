import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex);

// 创建module
const moduleA = {
  state: {
    name: 'student A'
  },
  mutations: {
    updateName (state, payload) {
      state.name = payload
    }
  },
  actions: {
    moduleAAsyncChangeName (context, payload) {
      setTimeout(() => {
        context.commit('')
      })
    }
  },
  getters: {
    getFullName111 (state) {
      return state.name + '111';
    },
    getFullName222 (state, getters) {
      return getters.getFullName111 + '222';
    }
  }
}

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
  mutations: {
    increMyCounter(state) {
      state.myCounter++;
    },
    decreMyCounter(state) {
      state.myCounter--;
    },
    addStudent (state, student) {
      state.students.push(student);
    }
  },
  actions: {
    setTimeOutAddStudent (myContext, payload) {
      // setTimeout(() => {
      //   myContext.commit('addStudent', payload.newStudent);
      //   console.log(payload.message);
      //   payload.success();
      // }, 1000)
      return new Promise((resolve => {
        setTimeout(() => {
          myContext.commit('addStudent', payload.newStudent);
          console.log(payload.message);
          resolve();
        }, 1000)
      }))
    }
  },
  getters: {
    squareCounter (state) {
      return Math.pow(state.myCounter, 2);
    },
    getStudentsAgeGTE20 (state) {
      return state.students.filter(student => {
        return student.age >= 20;
      })
    },
    getStudentsAgeGTE20Num (state, getters) {
      return getters.getStudentsAgeGTE20.length;
    },
    getStudentAgeGTEInput (state) {
      return age => {
        return state.students.filter(student => {
          return student.age >= age;
        })
      }
    }
  },
  modules: {
    a: moduleA
  }
})

export default store;
