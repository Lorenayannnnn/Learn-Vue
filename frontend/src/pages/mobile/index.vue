<template>
  <div style="padding-top: 1rem; height: 100%">
    <router-view style="padding: 0 2rem;"/>
    <nav-bar>
      <NavBarItem icon="home.png" link="/mobile/home" tip-text="Home" active-color="red"/>
      <NavBarItem icon="community.png" link="/mobile/community" tip-text="Community" active-color="green"/>
      <NavBarItem icon="profile.png" link="/mobile/profile" tip-text="Profile"/>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import NavBarItem from "@/components/NavBarItem";
import MyTransition from "../../components/MyTransition";
export default {
  name: "mobileHome",
  components: {MyTransition, NavBarItem, NavBar}
}
</script>

<style scoped lang="less">

</style>
