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
