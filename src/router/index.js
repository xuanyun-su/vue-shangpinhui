// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import store from '@/store'
// 使用插件
Vue.use(VueRouter)


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
let router =   new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to,from,savedPosition){
        return {y:0} // 滚动条在最上方
    }
})
router.beforeEach(async (to,from,next)=>{
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if(token){
       if(to.path === "/login"){
           next("/");
       }else{
           if(name){
               next();
           }else{
               try{
               await store.dispatch("getUserInfo")
               next();
               }catch(error){
               store.dispatch("LogOut");
               next("\login")
               }
           }
       } 
    }else{
        let toPath = to.path
        if(toPath.indexOf('/trade') != -1|| toPath.indexOf('/pay')!=-1 ||  toPath.indexOf('/center') !=-1){
            next('/login?redirect='+toPath)
        }else{
            next();
        }
        
    }
})


export default router;