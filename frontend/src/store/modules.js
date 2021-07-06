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

export default {
  a: moduleA
}
