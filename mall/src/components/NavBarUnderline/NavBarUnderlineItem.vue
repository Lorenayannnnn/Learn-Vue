<template>
  <div class="bar">
    <span style="flex: 1; text-align: center" :key="index" :class="{isActive: active === index}" @click="changeActive(index)">{{title}}</span>
    <div ref="line" class="tabLine"/>
    <div ref="activeLine" class="activeLine"/>
  </div>
</template>

<script>
export default {
  name: "NavBarUnderlineItem",
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    activeLineWidth () {
      return this.titles.length !== 0? (window.innerWidth/this.titles.length) : 0;
    }
  },
  mounted() {
    this.$refs.activeLine.style.width = this.activeLineWidth + 'px';
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    changeActive (index) {
      this.active = index;
      this.$router.push(this.link);
      this.$refs.activeLine.style.transform = 'translateX(' + this.activeLineWidth * index + 'px)';
    }
  }
}
</script>

<style scoped>
.bar {
  padding: 1rem 0 0.5rem;
  display: flex;
  justify-content: center;
  position: relative;
}
.tabLine {
  height: 4px;
  background: #8080803d;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.activeLine {
  height: 4px;
  background: #9093f0ff;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s;
  border-radius: 5px;
}

.isActive {
  color: rgb(73, 78, 255);
  font-weight: 800;
}
</style>
