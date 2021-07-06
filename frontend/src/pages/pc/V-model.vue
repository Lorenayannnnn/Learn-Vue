<template>
  <div>
    <h1>V-model练习</h1>
    <hr/>

    <h2>基本双向绑定</h2>
    <h3>自动V-Model</h3>
    <input type="text" placeholder="Please enter your name" v-model="name1"> --> <span>{{name1}}</span><br/>
    <h3>手动v-bind + v-on</h3>
    <input type="text" placeholder="Please enter your name" :value="name2" @input="name2 = $event.target.value"> --> <span>{{name2}}</span>
    <hr/>

    <h2>结合Radio：相同name/绑定相同变量互斥，用v-model绑定value</h2>
    <label for="male">
      <input type="radio" value="男" id="male" v-model="sex">男
    </label>
    <label for="female">
      <input type="radio" value="女" id="female" v-model="sex">女
    </label>
    <h2>您选择的性别是：{{sex}}</h2>
    <hr/>

    <h2>结合Checkbox</h2>
    <h3>单选框：绑定boolean值，控制多个组件</h3>
    <label>
      <input type="checkbox" value="true" v-model="agree">同意协议
      <button :disabled="!agree">登陆</button>
    </label>
    <h3>多选框：绑定数组</h3>
    <input type="checkbox" value="Minecraft" v-model="games">Minecraft
    <input type="checkbox" value="Game of Throne" v-model="games">Game of Throne
    <input type="checkbox" value="LOL" v-model="games">LOL
    <input type="checkbox" value="Gris" v-model="games">Gris
    <div>
      <span>您选择的游戏：</span><br/>
      <ul v-for="game in games">
        <li>{{game}}</li>
      </ul>
    </div>
    <hr/>

    <h2>Select & Option</h2>
    <select v-model="fruit1">
      <option value="苹果">苹果</option>
      <option value="香蕉">香蕉</option>
      <option value="石榴">石榴</option>
    </select>
    <span>你选择的水果：{{fruit1}}</span>
    <hr/>

    <h2>值绑定（:value, :id...）</h2>
    <label v-for="myFruit in allFruits" :for="myFruit">
      <input type="checkbox" :value="myFruit" :id="myFruit" v-model="fruit2">{{myFruit}}
    </label>
    <span>你选择的水果: {{fruit2}}</span>
    <hr/>

    <h2>V-model修饰符：lazy, number, trim</h2>
    <input type="text" v-model.lazy="input1" placeholder="失去焦点/回车才更新">{{input1}}<br/>
    <input type="text" v-model.number="input2" placeholder="自动变成数字">{{input2}}----{{typeof input2}}<br/>
    <input type="text" v-model.trim="input3" placeholder="过滤左右两边空格">{{input3}}<br/>
  </div>
</template>

<script>
export default {
  name: "V-model",
  data () {
    return {
      name1: '',
      name2: '',
      sex: '',
      games: [],
      agree: '',
      fruit1: '',
      allFruits: ['苹果', '香蕉', '石榴', '柿子'],
      fruit2: [],
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>

<style scoped>

</style>
