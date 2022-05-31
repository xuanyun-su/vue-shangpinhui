// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Detail from "@/pages/Detail"
import AddCartSuccess  from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"
import PaySuccess from "@/pages/PaySuccess"
import Center from "@/pages/Center"
import myOrder from "@/pages/Center/myOrder"
import groupOrder from "@/pages/Center/groupOrder"

export default [
    {
      path:"/paysucess",
      component: PaySuccess,
      meta:{show:true},
    },
    {
        path:"/center",
        component: Center,
        meta:{show:true},
        children:[
            {
                path:"myorder",
                component: myOrder,
  
            },{
                path:"grouporder",
                component: groupOrder
            },{
                path:"/center",
                redirect:"/center/myorder"
            }
        ]    
      },
    {
        path:"/home",
        component:Home,
        name:"home",
        meta:{show:true},
    },
    {
        path:"/pay",
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,form,next)=>{
            if(from.path =="/trade"){
                next();
            }else{
                next(false)
            }
        }
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:"search"
    },
    {
        path:"/login",
        name:"login",
        component:Login,
        meta:{show:false},
    },
    {
        path:"/detail/:skuId",
        component:Detail,
        meta:{show:false},
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false},
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true}
    },
    // 重定向 在项目跑起来的时候 访问、，立马让他访问到首页
    {
        path:"*",
        redirect:"/home"

    },{
        path:"/trade",
        component:Trade,
        meta:{isShow:true},
        beforeEnter: (from,to,next)=>{
            if(from.path == '/shopcart'){
                next();
            }else{
                next(false)
            }
        }
    }
]