<template>
  <div>
    <h1>计数器</h1>
    <span>Count: {{count}}</span><br/>
    <button @click="incre">+</button>
    <button @click="decre">-</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incre () {
      this.count++;
    },
    decre () {
      this.count--;
    }
  }
}
</script>

<style scoped>

</style>
