<template>
  <div>
    <div class="bar">
      <span v-for="(item, index) in titles" style="flex: 1; text-align: center" :key="index" :class="{isActive: active === index}" @click="changeActive(index, item.link)">{{item.title}}</span>
      <div ref="line" class="tabLine"/>
      <div ref="activeLine" class="activeLine"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "NavBarUnderline",
  props: {
    titles: {
      type: Array,
      default: []
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
    changeActive (index, link) {
      this.active = index;
      this.$router.push(link);
      this.$refs.activeLine.style.transform = 'translateX(' + this.activeLineWidth * index + 'px)';
    }
  }
}
</script>

<style scoped>
.bar {
  padding: 0.9rem 0;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background: white;
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
