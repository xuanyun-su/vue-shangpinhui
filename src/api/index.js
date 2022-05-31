// // 当前这个模块 api统一管理
// import requests  from "./request";
// // import mockRequst from './mockAjax'

// // 三级联动的接口
// // /api/product/getBaseCategoryList get请求 无参数
//     // 发请求axios发送请求返回结果是Promise对象
// export const reqCategoryList = ()=> requests.get({
//     url:"/product/getBaseCategoryList",
//     method:"get"
// });

// 获取banner （Home首页轮播图接口）
// export const reqGetBannerList = () => mockRequst.get('/banner');

//当前模块，API进行统一管理，即对请求接口统一管理
import mockrequests  from "@/api/mockAjax"
import requests from "@/api/request";

//首页三级分类接口
export const reqCategoryList = () => requests.get("/product/getBaseCategoryList")
// {
//     return  requests({
//         url: '/product/getBaseCategoryList',
//         method: 'GET'
//     })
// }
export const reqGetBannerList = () => mockrequests.get('/banner');

export const reqFloorList = () => mockrequests.get('/floor')

// 获取搜索模块数据 请求方式post 参数 需要带参数
// 当前这个函数需不需要接受外部传递参数
// 当前这个接口 给服务器传递参数params 至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:"post",data:params})


// "category3Id": "61",
// "categoryName": "手机",
// "keyword": "小米",
// "order": "1:desc",
// "pageNo": 1,
// "pageSize": 10,
// "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
// "trademark": "4:小米"


// 获取商品详情
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:"Get"})


export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:"post"
})

export const reqCartList = ()=>requests({url:"/cart/cartList",method:'get'})



export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})


export const reqUpdateCheckedById = (skuId,isChecked) =>({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'}) 

export const reqGetCode =  (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:"get"})


export const reqUserRegister = (data)=>requests({url:`/user/passport/register/`,data,method:"post"})

export const  reqUserLogin  = (data)=>requests({url:"/user/passport/login",data,method:'post'})

export const  reqUserInfo = ()=>requests({url:"/user/passport/auth/getUserInfo",method:'get'})

export const reqLogout = ()=>requests({url:"/user/passport/logout",method:"get"})

export const reqAddressInfo =()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:"get"})


export const reqOrder = ()=>requests({url:'/order/auth/trade',method:"get"})

export const reqSubmitOrder = (tradeNo,data)=>({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})

export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})


export const reqPayStatuc = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})


export const reqMyOrderList = (page,limit)=>requests({url:`order/auth/${page}/${limit}`,method:'get'})