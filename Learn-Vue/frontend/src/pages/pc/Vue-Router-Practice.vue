<template>
  <div>
    <h1>Vue-Router练习</h1><hr/>
    <div class="navBar">
      <router-link to="/pc/home/practice9/home" tag="button">Home</router-link>
<!--      Deprecated-->
      <router-link :to="{path: '/pc/home/practice9/about', query: {name: 'Lorena', height: 175, gender: 'female'}}" tag="button">About(router-link)</router-link>
      <button @click="about">About(命令+query)</button>
      <router-link to="/pc/home/practice9/question/0" tag="button">Question</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "vuerouterpractice",
  data () {
    return {
    }
  },
  methods: {
    about () {
      this.$router.push({
        path: '/pc/home/practice9/about',
        query: {
          name: 'Lorena',
          height: 175,
          gender: 'female'
        }
      });
    }
  }
}
</script>

<style scoped lang="less">
// router index.js中自定义的active class 的名字
.myActive {
  color: blueviolet;
}
</style>
