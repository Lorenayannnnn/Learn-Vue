<template>
  <button id="btn" :style="btnStyle"><span><slot/></span></button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    btnType: {
      type: String,
      default: 'plain',
      validator: (value) => {
        return ['plain', 'primary', 'circle'].indexOf(value) > -1;
      }
    }
  },
  data () {
    return {
      style: {}
    }
  },
  computed: {
    btnStyle () {
      if (this.btnType === 'plain') {
        return {color: '#474dec', background: 'white'};
      } else if (this.btnType === 'primary') {
        return {color: 'white', background: 'rgb(135 139 230)'};
      } else if (this.btnType === 'circle') {

      }
    }
  }
}
</script>

<style scoped>
#btn {
  border: 1px solid rgb(135 139 230);
  border-radius: 5px;
  height: 2rem;
  width: 5rem;
}
#btn:active {
  box-shadow: 0 0 5px 0 #474dec;
}
</style>
