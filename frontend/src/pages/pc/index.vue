<template>
  <div class="content">
    <div class="menu">
      <h1 style="margin: 0" >Pc Home</h1>
      <h3 :class="{selected: active === 'home'}" @click="home">首页</h3>
      <h3 :class="{selected: active === 'practice1'}" @click="practice1">01-计时器</h3>
      <h3 :class="{selected: active === 'practice2'}" @click="practice2">02-V Bind动态变样式</h3>
      <h3 :class="{selected: active === 'practice3'}" @click="practice3">03-V on绑定</h3>
      <h3 :class="{selected: active === 'practice4'}" @click="practice4">04-V if判断</h3>
      <h3 :class="{selected: active === 'practice5'}" @click="practice5">05-V Model</h3>
      <h3 :class="{selected: active === 'practice6'}" @click="practice6">06-组件化&父子组件基础（props & $emit）</h3>
      <h3 :class="{selected: active === 'practice7'}" @click="practice7">07-父子组件: $children/$refs & $parent</h3>
      <h3 :class="{selected: active === 'practice8'}" @click="practice8">08-V-slot使用</h3>
      <h3 :class="{selected: active === 'practice9'}" @click="practice9">09-Vue-Router</h3>
      <h3 :class="{selected: active === 'practice10'}" @click="practice10">10-Vuex-Practice</h3>
    </div>
    <div class="main" style="display: inline-block;
      height: 100%;
      width: 100%;
      position: absolute;
      overflow: auto">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "pcHome",
  mounted() {
    this.active = 'home';
  },
  data () {
    return {
      active: '',
      practice9Path: '/pc/home/practice9/home'
    }
  },
  watch: {
    '$route' (val) {
      this.active = val.name;
    }
  },
  methods: {
    home () {
      this.$router.push('/pc/home/home');
    },
    practice1 () {
      this.$router.push('/pc/home/practice1')
    },
    practice2 () {
      this.$router.push('/pc/home/practice2')
    },
    practice3 () {
      this.$router.push('/pc/home/practice3')
    },
    practice4 () {
      this.$router.push('/pc/home/practice4')
    },
    practice5 () {
      this.$router.push('/pc/home/practice5')
    },
    practice6 () {
      this.$router.push('/pc/home/practice6')
    },
    practice7 () {
      this.$router.push('/pc/home/practice7')
    },
    practice8 () {
      this.$router.push('/pc/home/practice8')
    },
    practice9 () {
      this.$router.push('/pc/home/practice9')
    },
    practice10 () {
      this.$router.push('/pc/home/practice10')
    }
  }
}
</script>

<style scoped lang="less">
.content {
  height: 100%;
  .menu {
    height: 100%;
    width: 13rem;
    border-right: 1px solid #6a00de;
    margin-right: 2rem;
    display: inline-block;
    h1 {
      padding-left: 1rem;
    }
    h3 {
      border-top: 1px solid blueviolet;
      margin: 0;
      padding: 10px 1rem;
      cursor: pointer;
    }
    h3:hover {
      background: #8a2be217;
    }
    .selected {
      color: blueviolet;
    }
  }
}
</style>
