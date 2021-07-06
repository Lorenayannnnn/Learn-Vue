<template>
  <div>
<!--    Computed-->
    <h2>Hello {{fullName}} !</h2>
  </div>
</template>

<script>
export default {
  name: "Home_computed",
  data () {
    return {
      firstName: "Lorena",
      lastName: "Yan"
    }
  },
  computed: {
    // 一般只有get
    fullName: {
      get () {
        return this.firstName + ' ' + this.lastName;
      },
      set (newName) {
        const names = newName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
}
</script>

<style scoped>

</style>
