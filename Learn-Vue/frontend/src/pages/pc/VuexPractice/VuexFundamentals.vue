<template>
  <div>
    <h1>Vuex基础</h1><hr/>
    <span>VuexFundamental页面: {{$store.state.myCounter}}</span>
    <MyButton @click.native="incre">+</MyButton>
    <HelloVuex/>
    <h4>Getters: 默认state参数，对myCounter进行平方</h4>
    <span>{{$store.getters.squareCounter}}</span><br/>
    <h4>Getters: 返回年龄大等于20的学生数组：（数量：{{$store.getters.getStudentsAgeGTE20Num}}）</h4>
    <table>
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      <tr v-for="student in $store.getters.getStudentsAgeGTE20">
        <td v-for="value in student">{{value}}</td>
      </tr>
    </table>
    <h4>Getters: 返回年龄大等于18(外部传参数)的学生数组：</h4>
    <table style="display: inline-block">
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>选择</th>
      </tr>
      <tr v-for="student in $store.getters.getStudentAgeGTEInput(18)">
        <td v-for="value in student">{{value}}</td>
      </tr>
    </table>
    <div style="display: inline-block; text-align: center;margin-left: 6rem;">
      <MyInput placeholder="编号" v-model="index"/>
      <MyInput placeholder="姓名" v-model="name"/>
      <MyInput placeholder="年龄" v-model="age"/>
      <MyButton @click.native="addNewStudent" style="font-size: 1rem;width: 3rem;">添加</MyButton>
      <MyButton @click.native="asyncAddNewStudent" style="font-size: 1rem;width: 3rem;">异步添加</MyButton>
    </div>
    <div>
      <h4>Modules</h4>
      <span>姓名：{{$store.state.a.name}}</span>
      <MyInput placeholder="更新姓名" v-model="newName"/>
      <MyButton @click.native="changeName">更新姓名</MyButton>
    </div>
  </div>
</template>

<script>
import HelloVuex from "./HelloVuex";
import MyButton from "@/components/pc/MyButton";
import MyInput from "@/components/MyInput";
export default {
  name: "VuexFundamentals",
  components: {MyInput, MyButton, HelloVuex},
  methods: {
    incre () {
      this.$store.commit('increMyCounter');
    },
    addNewStudent () {
      if (this.index !== '' && this.name !== '' && this.age !== '') {
        this.$store.commit('addStudent', {index: this.index, name: this.name, age: this.age});
      }
    },
    asyncAddNewStudent () {
      console.log("等了一秒");
      if (this.index !== '' && this.name !== '' && this.age !== '') {
        // this.$store.dispatch('setTimeOutAddStudent', {
        //   newStudent: {index: this.index, name: this.name, age: this.age},
        //   message: '添加新学生',
        //   success: () => {
        //     alert('添加成功！')
        //   }
        // });
        this.$store.dispatch('setTimeOutAddStudent', {
          newStudent: {index: this.index, name: this.name, age: this.age},
          message: '添加新学生'
        }).then(response => {
          alert("添加成功了！");
        })
      }
    },
    changeName () {
      this.$store.commit('updateName', this.newName);
    }
  },
  data () {
    return {
      index: '',
      name: '',
      age: '',
      newName: ''
    }
  }
}
</script>

<style scoped>

</style>
