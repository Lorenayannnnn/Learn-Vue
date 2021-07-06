<template>
  <div>
    <h1>V-If练习</h1>
    <hr/>
    <h2>分数判断</h2>
    <input type="text" placeholder="输入分数" v-model="score" @keyup.enter="scoring">
    <div v-show="display">
      <span v-if="score >= 90">优秀</span>
      <span v-else-if="score >= 80">良好</span>
      <span v-else-if="score >= 60">合格</span>
      <span v-else>不及格</span>
    </div>
    <hr/>
    <div>
      <div style="display: inline-block">
        <h2>登录方式切换</h2>
        <div v-if="byUserName">
          <span>用户名：</span>
          <input type="text" placeholder="请输入你的用户名" key="username">
        </div>
        <div v-else>
          <span>邮箱：</span>
          <input type="text" placeholder="请输入你的邮箱" key="email">
        </div>
      </div>
      <button @click="byUserName = !byUserName">切换登录方式</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "V-If",
  data () {
    return {
      score: '',
      display: false,
      byUserName: true
    }
  },
  methods: {
    scoring () {
      if (this.score !== '') {
        this.display = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
