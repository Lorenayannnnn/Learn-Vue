<template>
  <div>
    <h2>关于我</h2>
    <span>姓名：{{this.info.name}}</span><br/>
    <span>性别：{{this.info.gender}}</span><br/>
    <span>身高：{{this.info.height}}cm</span><br/>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    this.info = this.$route.query;
  },
  data () {
    return {
      info: {}
    }
  }
}
</script>

<style scoped>

</style>
