<template>
  <div>
    <img id="steve" :src="steve"/>
    <div style="text-align: center;">
      <MyInput placeholder="用户名" v-model="username"/>
      <MyInput placeholder="密码" v-model="password"/><br/>
      <MyButton @click.native="login">登陆</MyButton>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/MyInput";
import MyButton from "@/components/MyButton";
export default {
  name: "login",
  components: {MyButton, MyInput},
  data () {
    return {
      steve: require('@/assets/img/MCSteve.png'),
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === "Lorena" && this.password === "123") {
        this.$message.success({
          message: '登陆成功！',
          duration: 1500
        });
        setTimeout(() => {
          this.$router.push('/mobile/home');
        }, 1500)
      } else {
        this.$message.error('用户名或密码错误！');
      }
    }
  }
}
</script>

<style scoped>
#steve {
  width: 23rem;
  margin-left: 2rem;
  margin-top: 8rem;
}
</style>
