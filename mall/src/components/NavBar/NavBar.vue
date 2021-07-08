<template>
  <div id="NavBar">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#NavBar {
  width: 100%;
  display: flex;
  box-shadow: 0 -1px 5px 0 #9093F0FF;
  padding: 4px 0;
  position: fixed;
  bottom: 0;
  background: white;
}
div {
  flex: 1;
  text-align: center;
}
</style>
