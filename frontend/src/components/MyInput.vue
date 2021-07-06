<template>
  <input v-model="val" :placeholder="placeholder"/>
</template>

<script>
export default {
  name: "MyInput",
  props: ['placeholder'],
  data () {
    return {
      val: ''
    }
  },
  model: {
    event: 'change'
  },
  watch:{
    //监听值变化，再赋值给modelVal
    val (value) {
      this.$emit('change',value);
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 5px;
  border: 1px solid blueviolet;
  border-radius: 3px;
  padding: 4px 8px;
  outline: none;
  display: block;
}
input:focus {
  box-shadow: 0 0 3px 0 blueviolet;
}
</style>
