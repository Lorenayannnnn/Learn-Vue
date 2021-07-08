<template>
  <div class="TabBar">
    <div style="flex: 1"><slot name="left"></slot></div>
    <div style="flex: 3"><slot name="center"></slot></div>
    <div style="flex: 1"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.TabBar {
  height: 2.5rem;
  border: 1px solid #9093F0FF;
  display: flex;
  background: #9093F0FF;
  color: white;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
