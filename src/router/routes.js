

export default [
    {
      path:"/paysucess",
      component: ()=>import("@/pages/PaySuccess"),
      meta:{show:true},
    },
    {
        path:"/center",
        component: ()=>import("@/pages/Center"),
        meta:{show:true},
        children:[
            {
                path:"myorder",
                component: ()=>import("@/pages/Center/myOrder"),
  
            },{
                path:"grouporder",
                component:  ()=>import("@/pages/Center/groupOrder")
            },{
                path:"/center",
                redirect:"/center/myorder"
            }
        ]    
      },
    {
        path:"/home",
        component:()=>import("@/pages/Home"),
        name:"home",
        meta:{show:true},
    },
    {
        path:"/pay",
        component:()=>import("@/pages/Pay"),
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
        component:()=>import("@/pages/Search"),
        meta:{show:true},
        name:"search"
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("@/pages/Login"),
        meta:{show:false},
    },
    {
        path:"/detail/:skuId",
        component:()=>import("@/pages/Detail"),
        meta:{show:false},
    },
    {
        path:"/register",
        component:()=>import("@/pages/Register"),
        meta:{show:false},
    },
    {
        path:"/addcartsuccess",
        name:"addcartsuccess",
        component:()=>import("@/pages/AddCartSuccess"),
        meta:{show:true}
    },
    {
        path:"/shopcart",
        component:()=>import("@/pages/ShopCart"),
        meta:{show:true}
    },
    // 重定向 在项目跑起来的时候 访问、，立马让他访问到首页
    {
        path:"*",
        redirect:"/home"

    },{
        path:"/trade",
        component:()=>import("@/pages/Trade"),
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