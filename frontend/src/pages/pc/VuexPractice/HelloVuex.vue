<template>
  <div>
    <span>Hello Vuex 组件: {{$store.state.myCounter}}</span>
    <MyButton @click.native="decre">-</MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/pc/MyButton";
export default {
  name: "HelloVuex",
  components: {MyButton},
  methods: {
    decre () {
      this.$store.commit('decreMyCounter');
    }
  }
}
</script>

<style scoped>

</style>
