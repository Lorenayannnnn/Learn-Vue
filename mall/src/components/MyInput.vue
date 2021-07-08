<template>
  <input type="text" v-model="val"/>
</template>

<script>
export default {
  name: "MyInput",
  data () {
    return {
      val: ''
    }
  },
  model: {
    event: 'change'
  },
  watch: {
    val (newVal) {
      this.$emit('change', newVal);
    }
  }
}
</script>

<style scoped>
input {
  width: 13rem;
  height: 1.5rem;
  margin: 0.5rem 0;
  padding: 4px 1rem;
  border: 1px solid #9093F0FF;
  border-radius: 7px;
  outline: none;
}
input:focus {
  box-shadow: 0 0 4px 0 #9093F0FF;
}
</style>
