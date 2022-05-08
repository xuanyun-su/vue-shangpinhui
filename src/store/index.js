import Vue from 'vue'
import Vuex from 'vuex'
// 需要使用过一次
Vue.use(Vuex);
// state 仓库存储数据的地方
// 引入小仓库
import home from './home'
import search from './search';




// 对外暴露store类的一个实例
export default new Vuex.Store({
   // 实现vuex仓库模块开发存储数据
   modules:{
       home,
       search
   }
});