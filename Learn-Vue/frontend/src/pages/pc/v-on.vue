<template>
  <div>
    <h1>v-on 练习</h1>
    <hr/>
    <div>
      <h2>v-on基础</h2>
      <button @click="clicking">btn1</button>
      <button @click="clickBtn2('abc')">btn2</button>
      <button @click="clickBtn3('abc', $event)">btn3</button>
    </div>
    <hr/>
    <div>
      <h2>v-on 修饰符</h2>
      <span>1. Stop修饰符：防止事件冒泡</span>
      <div @click="clickDiv" class="myDiv">
<!--        <button @click="clickInsideBtn">点我</button>-->
        <button @click.stop="clickInsideBtn">点我</button>
      </div>
      <br/>
      <span>2. Prevent修饰符：防止自动提交</span>
      <form action="home">
        <input type="submit" value="提交" @click.prevent="mySubmit('闫天怡')"/>
      </form>
      <br/>
      <span>3. 监听键盘</span><br/>
      <input type="text" @keyup.enter="myKeyupEnter('闫天怡')">
    </div>
  </div>
</template>

<script>
export default {
  name: "v-on",
  methods: {
    //  定义参数但是不传参数，默认为监听事件
    clicking (event) {
      console.log('定义参数但是不传参数，默认为监听事件', event);
    },
    clickBtn2(str) {
      console.log('定义参数并且传参数，普通打印', str);
    },
    clickBtn3 (myName, myEvent) {
      console.log('需要event和多个参数', myName, myEvent);
    },
    clickDiv () {
      alert("Click div!!");
    },
    clickInsideBtn() {
      alert("Click inside btn!!");
    },
    mySubmit (name) {
      /*alert(name + "成功提交！即将跳转首页");*/
      alert(name + "成功提交！已经prevent");
    },
    myKeyupEnter (name) {
      alert("你好" + name)
    }
  }
}
</script>

<style scoped lang="less">
.myDiv {
  border: 1px solid blueviolet;
  width: 25rem;
  height: 3rem;
  border-radius: 8px;
  padding: 1rem;
}
</style>
