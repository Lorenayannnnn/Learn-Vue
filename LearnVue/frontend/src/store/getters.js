export default {
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
}
