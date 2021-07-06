<template>
  <div>
    <h1>父子组件：$children/$refs 和 $parent</h1><hr/>
    <h2>父 --> 子：children</h2>
    <div>
      <h3>$children: I'm the father.</h3>
      <button @click="callChildMessageMethod">调用child的showMessage方法</button>
      <cpn :index="1"/>
      <cpn :index="2"/>
      <cpn :index="3"/>
      <cpn :index="4"/>
    </div>
    <div>
      <h3>$ref: I'm the mother.</h3>
      <button @click="callChild5">调用孩子5的方法</button>
      <cpn ref="child5" :index="5"/>
    </div>
    <hr/>
    <h2>子 --> 父</h2>
    <h3>$parent</h3>
    <cpn :index="6"/>
    <h3>$root</h3>
  </div>
</template>

<script>
export default {
  name: "Component_ChildrenRef_And_Parent",
  components: {
    cpn: {
      props: {
        index: {
          type: Number
        }
      },
      template: `
        <div>
            <span>I'm child {{index}}.</span>
            <grandchild/>
        </div>
      `,
      methods: {
        showMessage () {
          console.log(`I'm child ` + this.index + `.`);
        },
        calledByChild (){
          console.log("Called by child")
        }
      },
      components: {
        grandchild: {
          props: {
            index: {
              type: Number
            }
          },
          template: `
            <div><span>I'm grandchild {{index}}.</span><button @click="callParent">调用parent方法</button></div>
          `,
          methods: {
            callParent () {
              this.$parent.calledByChild();
            }
          }
        }
      }
    }
  },
  methods: {
    callChildMessageMethod () {
      for (let child of this.$children) {
        child.showMessage();
        console.log("孩子编号：" + child.index);
      }
    },
    callChild5 () {
      this.$refs.child5.showMessage();
    }
  }
}
</script>

<style scoped lang="less">

</style>
