<template>
  <div>
    <h1>组件化开发</h1><hr/>
    <MyInput1 placeholder="我的输入框1"/>
    <MyInput placeholder="我的输入框"/><br/>
    <MyButton text="我的按钮1"/><hr/>


    <h2>父组件和子组件</h2>
    <h3>父传子: movie信息传入list，list把movie传入listItem</h3>
    <MyMovieList :movie-list="movieList"/><br/>

    <h3>子传父: MyCounter自定义increment & decrement事件，更新count值时，emit事件 & 最新count值。父组件自定义changeCount来处理事件</h3>
    <MyCounter @increCount="changeCount" @decreCount="changeCount"/>
    <span>父组件Count：{{count}}</span>
    <hr/>
  </div>
</template>


<script>
import Vue from "vue";
import MyButton from "@/components/pc/MyButton";
import MyInput from "@/components/MyInput";

// 1. 普通创建 & 注册组件构造器
const MyInput1 = Vue.extend({
  props: ['placeholder'],
  template: `
    <div>
      <input :placeholder="placeholder">
    </div>
  `,
})


// 2. 父子组件传递数据：父传子props：type, default, validator, required...
// 局部Icon
const MyIcon = Vue.extend({
  props: {
    iconType: {
      type: String,
      default: 'plain',
      validator: (value) => {
        return ['plain', 'success', 'error', 'warning'].indexOf(value) >= -1;
      }
    }
  },
  template: `
    <div>
      <button v-if="iconType === 'plain'" style="color: blueviolet">一般</button>
      <button v-else-if="iconType === 'success'" style="color: green">成功</button>
      <button v-else-if="iconType === 'error'" style="color: red">失败</button>
      <button v-else-if="iconType === 'warning'" style="color: orange">警告</button>
    </div>
  `
})

// 局部MyListItem：绑定变量时一定要用v-bind！！！
const MyListItem = Vue.extend({
  props: {
    movie: Object
  },
  template: `
    <li>{{movie.name}}: $ {{movie.price}}</li>
  `
})

// 局部MyList：绑定变量时一定要用v-bind！！！
const MyMovieList = Vue.extend({
  props: {
    movieList: Array
  },
  template: `
    <div>
        <ul v-for="movie in movieList">
          <MyListItem :movie="movie"/>
        </ul>
        <span>Total Price: $ {{totalPrice}}</span><br/><br/>
      <span>组件传数据: type, default, validator...: </span><MyIcon style="display: inline-block" icon-type="success"/>
    </div>
  `,
  components: {
    MyListItem,
    MyIcon
  },
  computed: {
    totalPrice () {
      return this.movieList.reduce((prevTotal, movie) => {
        return prevTotal + movie.price;
      }, 0)
    }
  }
})

// 局部Counter：子传父自定义事件
const MyCounter = Vue.extend({
  template: `
    <div>
        <button @click="decrement">-</button>
        <span>子组件Count：{{count}}</span>
        <button @click="increment">+</button>
    </div>
  `,
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++;
      this.$emit('increCount', this.count);
    },
    decrement () {
      this.count--;
      this.$emit('decreCount', this.count);
    }
  }
})

export default {
  name: "ComponentPractice",
  // 局部注册
  components: {
    MyInput,
    MyButton,
    MyInput1,
    MyMovieList,
    MyCounter
  },
  data () {
    return {
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
      }],
      count: 0
    }
  },
  methods: {
    changeCount (newCount) {
      this.count = newCount;
    }
  }
}

// 全局注册
//Vue.component('MyInput', {
// props: ['placeholder'],
//   template: `
//     <div>
//       <input :placeholder="placeholder">
//     </div>
//   `,
// });
</script>

<style scoped>

</style>
