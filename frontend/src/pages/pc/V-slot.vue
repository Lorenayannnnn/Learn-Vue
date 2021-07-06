<template>
  <div>
    <h1>V-slot的使用</h1><hr/>
    <h2>基本使用</h2>
    <cpn1/>
    <cpn1>
      <span>我是第二个span</span>
      <button>我是替换按钮2</button>
    </cpn1>
    <hr/>
    <h2>具名插槽：需要多个插槽时</h2>
    <navbar>
      <span slot="right">登陆</span>
    </navbar>
    <navbar>
      <span slot="left">导航</span>
    </navbar>
    <navbar>
      <span slot="center">京东有惊喜</span>
      <span slot="right">登陆</span>
    </navbar>
    <hr/>
    <h2>作用域插槽：父组件中用template slot-scope来获取子组件中的数据并进行重新展示</h2>
    <h3>子组件默认展示</h3>
    <cpn2/>
    <h3>父组件用template & slot-scope进行重新展示</h3>
    <h4>展示一</h4>
    <cpn2>
      <template slot-scope="childSlot">
        <span>{{childSlot.languageList.join(' * ')}}</span>
      </template>
    </cpn2>
    <h4>展示二</h4>
    <cpn2>
      <template v-slot="childSlot2">
        <table style="border-collapse: collapse">
          <th style="border: 1px solid blueviolet;">Language</th>
          <tr style="border: 1px solid blueviolet;" v-for="lang in childSlot2.languageList">{{lang}}</tr>
        </table>
      </template>
    </cpn2>
  </div>
</template>

<script>
export default {
  name: "V-slot",
  components: {
    cpn1: {
      template: `
        <div>
            <h2>我是子组件，下面是插槽</h2>
            <slot><button>我是默认按钮</button></slot>
        </div>
      `
    },
    navbar: {
      template: `
        <div>
            <slot name="left"><button><</button></slot>
            <slot name="center">
                <input type="text"/>
            </slot>
            <slot name="right"></slot>
        </div>
      `
    },
    cpn2: {
      template: `
        <div>
            <slot :languageList="pLanguages">
              <ul>
                <li v-for="lang in pLanguages">{{lang}}</li>
              </ul>
            </slot>
        </div>
      `,
      data () {
        return {
          pLanguages: ['Java', 'C++', 'Javascript', 'HTML', 'CSS']
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
