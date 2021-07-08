<template>
  <div>
    <TabBar>
      <span style="font-weight: 700;font-size: 20px;" slot="center">My Cart</span>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar/TabBar";
export default {
  name: "cart",
  components: {TabBar}
}
</script>

<style scoped>

</style>
