<template>
  <div>
    <h1>Practice2: v-for (遍历list) & v-bind（动态改样式）</h1>
    <hr/>
    <div>
      <div style="display: inline-block;">
        <table class="movieTable">
          <th style="width: 12rem;">Name</th>
          <th style="width: 4rem;">Price</th>
          <th style="width: 6rem;">Number</th>
          <th style="width: 6rem;">Operation</th>
          <tr :class="{selected: active === i}" @click="isActive(i)" v-for="(movie, i) in movieList">
            <td>{{movie.name}}</td>
            <td>${{movie.price}}</td>
            <td>
              <button @click="changeNumber(movie, false)">-</button>
              <span>{{movie.number}}</span>
              <button @click="changeNumber(movie, true)">+</button>
            </td>
            <td><button @click="removeMovie(i)">移除</button></td>
          </tr>
        </table>
        <span style="float: right;">Total Price: ${{totalPrice}}</span>
      </div>
      <div class="inputMovie">
        <MyInput type="text" placeholder="电影名称" v-model="newMovieName"/>
        <MyInput type="text" placeholder="电影票价格" v-model="newMoviePrice"/><br/>
        <MyButton @click.native="addMovie" text="添加"/>
      </div>
    </div>
    <hr/>
    <div v-for="(movie, index) in movieList">
      <ul>
        <li :key="index">{{movie.name}}: ${{movie.price}}</li>
      </ul>
    </div>
    <hr/>
    <h2>数组三个高阶函数：filter, map, reduce</h2>
    <span>priceList: filter筛除大于等于3的数字，map都乘2，reduce求和</span>
    <span>Total Price: {{calcAllPrice}}</span>
  </div>
</template>

<script>
import MyButton from "@/components/pc/MyButton";
import MyInput from "@/components/MyInput";
export default {
  name: "VBind",
  components: {MyInput, MyButton},
  computed: {
    totalPrice () {
      // let totalPrice = 0;
      //
      // // for (let i = 0; i < this.movieList.length; i++) {
      // //   totalPrice += this.movieList[i].price;
      // // }
      //
      // // for (let movie in this.movieList) {
      // //   totalPrice += this.movieList[movie].price;
      // // }
      //
      // // for (let movie of this.movieList) {
      // //   totalPrice += movie.price * movie.number;
      // // }
      //
      // return totalPrice;
      return this.movieList.reduce((prevTotal, movie) => {
        return prevTotal + movie.price;
      }, 0)
      // XXX.reduce(callback, [initial value])
    },
    calcAllPrice () {
      return this.priceList.filter((val) => {
        return val >= 3;
      }).map((val) => {
        return val * 2;
      }).reduce((prev, curr) => {
        return prev + curr;
      })
    }
  },
  data () {
    return {
      active: '',
      movieList: [{
        name: 'The Game of Thrones',
        number: 0,
        price: 4
      }, {
        name: 'Person of Interest',
        number: 0,
        price: 3
      }, {
        name: 'Wandering Earth',
        number: 0,
        price: 2
      }, {
        name: 'Friends',
        number: 0,
        price: 1
      }],
      newMovieName: '',
      newMoviePrice: '',
      priceList: [4, 3, 2, 1]
    }
  },
  methods: {
    isActive (val) {
      this.active = val;
    },
    addMovie () {
      if (this.newMoviePrice !== '' && this.newMovieName !== '') {
        this.movieList.push({
          name: this.newMovieName,
          number: 0,
          price: this.newMoviePrice
        });
      }
    },
    changeNumber (movie, isAdd) {
      if (isAdd) {
        movie.number++;
      } else {
        if (movie.number > 0) {
          movie.number--;
        }
      }
    },
    removeMovie (index) {
      this.movieList.splice(index, 1);
    }
  }
}
</script>

<style scoped lang="less">
  .movieTable {
    border-collapse: collapse;
    tr {
      cursor: pointer;
    }
    tr:hover {
      background: #8a2be214;
    }
    td {
      text-align: center;
      border: 1px solid #9e43f352;
    }
    .selected {
      color: blueviolet;
      font-weight: 800;
    }
  }
  .inputMovie {
    display: inline-block;
    position: relative;
    width: 13rem;
    top: -3rem;
    left: 3rem;
    text-align: center;
  }
</style>
