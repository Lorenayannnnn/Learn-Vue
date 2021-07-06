<template>
  <button><span><slot/></span></button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped lang="less">
button {
  background: white;
  border: 1px solid blueviolet;
  border-radius: 4px;
  color: blueviolet;
  cursor: pointer;
  width: 4rem;
  font-size: 1.5rem;
}
button:hover {
  box-shadow: 0 0 3px 0 blueviolet;
}
button:active{
  box-shadow: 0 0 3px 0 blueviolet;
  background: #f1f1f1;
}
</style>
