<template>
  <div @click="route">
    <img v-if="!isActive" :src="imgSrc" :alt="tipText"/>
    <img v-else :src="activeImgSrc" :alt="tipText"/><br/>
<!--    <span ref="tipText" :class="{active: isActive}">{{tipText}}</span>-->
    <span :style="activeStyle">{{tipText}}</span>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    link: String,
    icon: String,
    tipText: String,
    activeColor: {
      type: String,
      default: 'blueviolet'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle () {
      return this.isActive? {color: this.activeColor, fontWeight: 600}: {};
    }
  },
  data () {
    return {
      imgSrc: require('@/assets/icon/' + this.icon),
      activeImgSrc: require('@/assets/icon/active' + this.icon)
    }
  },
  methods: {
    route () {
      this.$router.push(this.link);
    }
  }
}
</script>

<style scoped>
img {
  height: 2rem;
  position: relative;
  top: 6px;
}
.active {
  color: blueviolet;
  font-weight: 600;
}
</style>
