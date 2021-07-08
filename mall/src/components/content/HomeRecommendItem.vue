<template>
  <div>
    <img style="height: 4.5rem;" :src="imgSrc" :alt="text"/><br/>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendItem",
  props: {
    imgSrc: String,
    text: String
  }
}
</script>

<style scoped>

</style>
