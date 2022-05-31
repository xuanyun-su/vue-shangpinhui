import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload';
// 三级联动组件 -- 全局组件
import { Button, Select,MessageBox } from 'element-ui';
import TypeNav from "@/components/TypeNav"
import Carousel from "@/components/Carousel"
import Pagination from "@/components/Pagination"
import  '@/mock/mockServe'
// 第一个参数：全局组建的名字 第二个参数哪一个组件
Vue.component(TypeNav.name,TypeNav)
// Vue.component(Pagination.name,Pagination)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
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

import * as API from "@/api"

// 引入swiper样式
import "swiper/css/swiper.css"
import atm from "@/assets/images/1.gif"
Vue.use(VueLazyload,{
    loading: atm
})

import myPlugins from "@/plugins/myPlugin"
Vue.use(myPlugins,{
  name:"upper"
});
import "@/plugins/validate.js"
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
  },
  // 注册路由 底下的写法kv一致省略v小写的
  router,
  // 注册仓库 ：
  // 组件实例的身上会多两个$store属性
  store,

}).$mount('#app')
