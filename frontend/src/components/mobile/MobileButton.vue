<template>
  <button :style="btnStyle"><slot/></button>
</template>

<script>
export default {
  name: "MobileButton",
  props: {
    btnType: {
      type: String,
      default: 'plain',
      validator: (value) => {        //这个值必须匹配下列字符串的一个
        return ['plain', 'primary', 'circle'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    btnStyle () {
      if (this.btnType === 'plain') {
        return {background: 'white', color: 'blueviolet'}
      } else if (this.btnType === 'primary') {
        return {background: 'blueviolet', color: 'white'}
      } else if (this.btnType === 'circle') {
        return {
          border: '1px solid blueviolet',
          borderRadius: '50%',
          height: '3rem',
          background: 'white',
          width: '3rem'
        }
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 3.5rem;
  height: 1.7rem;
  border: 1px solid blueviolet;
  border-radius: 5px;
}
button:active {
  box-shadow: 0 0 5px 0 blueviolet;
}
img {
  height: 2rem;
  margin-top: 5px;
}
</style>
