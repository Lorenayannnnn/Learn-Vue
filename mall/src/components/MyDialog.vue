<template>
  <MyTransition>
    <div v-show="dialogVisible" class="back">
      <div class="MyDialog">
        <h4 style="padding: 0 2rem;">{{title}}</h4>
        <div style="padding: 0 3rem;">
          <slot/>
        </div>
        <div class="buttons">
          <slot name="buttons"/>
        </div>
      </div>
    </div>
  </MyTransition>
</template>

<script>
import MyTransition from "@/components/MyTransition";
export default {
  name: "MyDialog",
  components: {MyTransition},
  props: {
    title: String,
    dialogVisible: Boolean
  }
}
</script>

<style scoped lang="less">
.back {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  background: #0000004f;
  .MyDialog {
    background: white;
    border: 1px solid blueviolet;
    height: 10rem;
    position: relative;
    border-radius: 8px;
    width: 85%;
    .buttons {
      float: right;
      margin-right: 1rem;
      margin-top: 2rem;
    }
  }
}
</style>
