export default {
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
}
