import { reqCategoryList, reqFloorList, reqGetBannerList } from "@/api";
import urlFileManager from "less/lib/less-node/url-file-manager";




// home的小仓库
const state = {
    // state中数据默认初始值别瞎写，服务器返回对象或数组 根据接口返回值初始化的
    categoryList : [],
    bannerList: [],
    floorlist:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
                state.categoryList = categoryList;
    },
    GETBANNER(state,bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state,floorlist){
        state.floorlist = floorlist;
    }
};
const actions = {
    // 通过api里面的接口函数调用 服务器发请求 获取服务器数据
    async category({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async getbanner({commit}){
        let result = await reqGetBannerList();

        if(result.code === 200){
            commit("GETBANNER",result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code === 200){
            commit("GETFLOORLIST",result.data)
        }
    }
};
const getters = {};


export default {
    state,
    mutations,
    actions,
    getters,
}
