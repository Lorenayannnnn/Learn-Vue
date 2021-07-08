<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    var isMobile = this._isMobile()
    if (isMobile) {
      if (!this.$router.currentRoute.path.indexOf('mobile') <= -1) {
        this.$router.replace('/mobile/login');
      }
    } else {
      if (!this.$route.path.indexOf('pc') <= -1) {
        this.$router.replace('/pc/home/home');
      }
    }
  },
  methods: {
    // 判断是PC还是移动端
    _isMobile() {
      return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
