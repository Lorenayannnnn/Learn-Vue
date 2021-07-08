<template>
  <div>
    <router-view/>
    <NavBar>
      <NavBarItem icon="home.png" link="/mobile/home" text="Home"/>
      <NavBarItem icon="category.png" link="/mobile/category" text="Category"/>
      <NavBarItem icon="cart.png" link="/mobile/cart" text="My Cart"/>
      <NavBarItem icon="profile.png" link="/mobile/profile" text="Profile"/>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
import NavBarItem from "@/components/NavBar/NavBarItem";
export default {
  name: "index",
  components: {NavBarItem, NavBar}
}
</script>

<style scoped>

</style>
