export default {
  increMyCounter(state) {
    state.myCounter++;
  },
  decreMyCounter(state) {
    state.myCounter--;
  },
  addStudent (state, student) {
    state.students.push(student);
  }
}
