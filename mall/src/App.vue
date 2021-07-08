<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import('@/assets/css/base.css')
import('@/assets/css/normalize.css')
export default {
  name: 'App',
  mounted() {
    var isMobile = this._isMobile()
    if (isMobile) {
      if (!this.$router.currentRoute.path.indexOf('mobile') <= -1) {
        alert("mobile!")
        this.$router.replace('/mobile/login');
      }
    } else {
      if (!this.$route.path.indexOf('pc') <= -1) {
        this.$router.replace('/pc/login');
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
