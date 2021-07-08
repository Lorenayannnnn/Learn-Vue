<template>
  <div>

    <TabBar>
      <span style="font-weight: 700;font-size: 20px;" slot="center">Shopping</span>
    </TabBar>

    <el-carousel :interval="4000" height="200px">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img style="height: 220px" :src="item.image"/>
        </a>
      </el-carousel-item>
    </el-carousel>

    <NavBar style="position: unset;box-shadow: none;padding: 1rem 0;">
      <div v-for="(item, index) in recommend">
        <home-recommend-item @click.native="goToLink(item.link)" :imgSrc="item.image" :text="item.title" :key="index"/>
      </div>
    </NavBar>
    <NavBarUnderline :titles="NavBarUnderlineList">
      <router-view/>
    </NavBarUnderline>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar/TabBar";
import {homeData} from "@/network/home";
import NavBar from "@/components/NavBar/NavBar";
import HomeRecommendItem from "@/components/content/HomeRecommendItem";
import NavBarItem from "@/components/NavBar/NavBarItem";
import NavBarUnderline from "@/components/NavBarUnderline/NavBarUnderline";

export default {
  name: "home",
  components: {NavBarUnderline, NavBarItem, HomeRecommendItem, NavBar, TabBar},
  data () {
    return {
      banner: [],
      recommend: [],
      NavBarUnderlineList: [{
        title: 'Popular',
        link: '/mobile/home/popular'
      },{
        title: 'New',
        link: '/mobile/home/new'
      },{
        title: 'Featured',
        link: '/mobile/home/featured'
      }]
    }
  },
  created () {
    homeData().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  },
  methods: {
    goToLink (link) {
      window.location.href = link;
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
