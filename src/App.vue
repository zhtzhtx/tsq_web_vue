<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <web-header></web-header>
    <!-- 主体路由 -->
    <router-view />
    <!-- 底部信息栏 -->
    <web-foot></web-foot>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Foot from "@/components/Foot/Foot.vue";

export default {
  components: {
    "web-header": Header,
    "web-foot": Foot
  }
};
</script>

<style lang="stylus">
body {
  margin: 0;
  padding: 0;
}
</style>
