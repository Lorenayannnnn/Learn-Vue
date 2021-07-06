<template>
  <div class="navbar">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px 0 blueviolet;
  height: 3rem;
  padding: 4px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  div {
    flex: 1;
    text-align: center;
  }
}
</style>
