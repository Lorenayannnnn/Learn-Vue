<template>
  <transition name="fade"><slot/></transition>
</template>

<script>
export default {
  name: "MyTransition"
}
</script>

<style scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.3s;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 0.3s;
}
</style>
