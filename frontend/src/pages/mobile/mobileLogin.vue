<template>
  <div style="text-align: center">
    <img id="steve" :src="steve"/>
    <div>
      <MyInput style="display: inline-block;" class="MyInput" placeholder="用户名" v-model="username"/>
      <MyInput style="display: inline-block;" class="MyInput" placeholder="密码" v-model="password"/><br/>
      <MobileButton @click.native="login" class="loginBtn" btnType="primary">登陆</MobileButton>
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput'
import MobileButton from "@/components/mobile/MobileButton";
export default {
  name: "mobileLogin",
  data () {
    return {
      steve: require('@/assets/MCSteve.png'),
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'Lorena' && this.password === '123') {
        this.$message.success("登陆成功！")
        setTimeout(() => {
          this.$router.push('/mobile/home');
        }, 2000)
      } else {
        this.$message.error("用户名或密码错误");
      }
    }
  },
  components: {MobileButton, MyInput}
}
</script>

<style scoped>
#steve {
  width: 25rem;
  margin-top: 8rem;
  margin-left: 1rem;
}
.MyInput {
  width: 15rem;
  height: 1.5rem;
  margin: 0.5rem 0;
}
.loginBtn {
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
}
</style>
