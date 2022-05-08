// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"


let originPush = VueRouter.prototype.push;
let originRepalce = VueRouter.prototype.replace;

// 第一个参数 告诉push方法 你往哪里条（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call || apply 相同点：都可以调用函数以此，都可以篡改函数上下文以此
        // 不同点：call 与apply 产地参数 call传递参数用逗号隔开，apply传递数组
        originPush.call(this,location,resolve,reject)
        
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originRepalce.call(this,location,resolve,reject)
    }else{
        originRepalce.call(this,location,()=>{},()=>{});
    }
}
// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search"
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false},
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false},
        },
        // 重定向 在项目跑起来的时候 访问、，立马让他访问到首页
        {
            path:"*",
            redirect:"/home"

        }
    ]
})