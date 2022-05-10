import Vue from 'vue'
import App from './App.vue'
// 三级联动组件 -- 全局组件
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import  '@/mock/mockServe'
// 第一个参数：全局组建的名字 第二个参数哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)


Vue.config.productionTip = false

/* // 测试
import {reqCateGoryList} from '@/api'
reqCateGoryList(); */
// 引入仓库
import store from '@/store'

// 引入路由
import router from "@/router"

// import {reqGetSearchInfo} from "@/api"

// console.log(reqGetSearchInfo({}))



// 引入swiper样式
import "swiper/css/swiper.css"
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  // 注册路由 底下的写法kv一致省略v小写的
  router,
  // 注册仓库 ：
  // 组件实例的身上会多两个$store属性
  store
}).$mount('#app')
