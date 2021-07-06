<template>
  <div>
    <h2>{{this.question}}</h2>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import questionList from "./QuestionList";

export default {
  name: "Question",
  mounted() {
    this.qid = this.$route.params.qid;
    this.question = questionList[this.qid];
  },
  data () {
    return {
      answer: [],
      question: '',
      qid: ''
    }
  },
  methods: {
    next () {
      if (this.qid + 1 === questionList.length) {

      } else {
        this.question = questionList[++this.qid];
        this.$router.push('/pc/home/practice9/question/' + this.qid);
      }
    }
  }
}
</script>

<style scoped>

</style>
