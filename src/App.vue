<template>
  <div id="app">
    <!-- <h1 v-upper="msg"></h1> -->
    <Header/>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home,Search显示的 在登录,注册隐藏的 -->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'" ></Footer> -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
// 引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  data(){
    return {
       msg: "ABC"
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted(){
    // 通知vuex发请求 获取数据 存储于仓库当中
    this.$store.dispatch("category");
  },
};
</script>

<style scoped>
</style>
