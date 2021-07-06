<template>
  <div>
    <h1 style="margin-top: 0;">Profile</h1>
    <MobileButton class="exitBtn" btnType="circle" @click.native="changeDialog"><img :src="exitImg"/></MobileButton>
    <MyTable :tableData="movieList"/>
    <MyDialog :dialogVisible="dialogVisible" title="退出">
      <span>确认退出吗？</span>
      <div slot="buttons">
        <MobileButton @click.native="changeDialog">取 消</MobileButton>
        <MobileButton btnType="primary" @click.native="logout">确 认</MobileButton>
      </div>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from "@/components/MyDialog";
import MobileButton from "@/components/mobile/MobileButton";
import MyTable from "@/components/MyTable";
export default {
  name: "mobileProfile",
  components: {MyTable, MobileButton, MyDialog},
  data () {
    return {
      dialogVisible: false,
      exitImg: require('@/assets/icon/exit.png'),
      movieList: [{
        name: 'The Game of Thrones',
        price: 4
      }, {
        name: 'Person of Interest',
        price: 3
      }, {
        name: 'Wandering Earth',
        price: 2
      }, {
        name: 'Friends',
        price: 1
      }]
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

<style scoped lang="less">
.exitBtn {
  position: absolute;
  right: 2rem;
  top: 1rem;
}
</style>
