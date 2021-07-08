<template>
  <div>
    <TabBar>
      <span style="font-weight: 700;font-size: 20px;" slot="center">Profile</span>
      <img style="height: 2rem;" slot="right" :src="exitImg" @click="changeDialog"/>
    </TabBar>
    <MyDialog :dialogVisible="dialogVisible" title="退出">
      <span>确认退出吗？</span>
      <div slot="buttons">
        <MyButton @click.native="changeDialog">取 消</MyButton>
        <MyButton btnType="primary" @click.native="logout">确 认</MyButton>
      </div>
    </MyDialog>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar/TabBar";
import MyDialog from "@/components/MyDialog";
import MyButton from "@/components/MyButton";
export default {
  name: "profile",
  components: {MyButton, MyDialog, TabBar},
  data () {
    return {
      exitImg: require('@/assets/icon/exit.png'),
      dialogVisible: false
    }
  },
  methods: {
    changeDialog () {
      this.dialogVisible = !this.dialogVisible;
    },
    logout () {
      this.$router.push('/mobile/login');
    }
  }
}
</script>

<style scoped>

</style>
