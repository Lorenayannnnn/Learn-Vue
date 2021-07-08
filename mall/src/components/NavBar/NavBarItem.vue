<template>
  <div @click="route">
    <img v-if="!isActive" ref="img" style="height: 2rem;" :src="img" :alt="text"/>
    <img v-else ref="img" style="height: 2rem;" :src="activeImg" :alt="text"/><br/>
    <span :style="activeStyle">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    text: String,
    icon: String,
    link: String
  },
  data () {
    return {
      img: require('@/assets/icon/' + this.icon),
      activeImg: require('@/assets/icon/active' + this.icon)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.link) > -1;
    },
    activeStyle () {
      return this.isActive? {color: 'rgb(73 78 255)', fontWeight: 800}:{};
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

</style>
