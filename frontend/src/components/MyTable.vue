<template>
  <table>
    <slot/>
    <tr>
      <th v-for="(value, key) in tableData[0]">{{key}}</th>
    </tr>
    <tr v-for="item in tableData">
      <td v-for="value in item">{{value}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    tableData: Array
  }
}
</script>

<style scoped>
table {
  width: 100%;
  text-align: left;
}
</style>
