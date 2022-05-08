import {reqGetSearchInfo} from "@/api"

// search的小仓库
const state = {
    searchlist:{}
};
const mutations = {
    GETSEARCHLIST(state,searchlist){
        state.searchlist = searchlist;
    }
};
const actions = {
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // params参数 适当用户派发actions时候第一个参数传递过来的时候 至少是一个空对象
        let result = await reqGetSearchInfo(params)
        if(result.code == 200){
            commit("GETSEARCHLIST",result.data)
        }
    }
};
// 计算属性：在项目中 为了简化数据而生
const getters = {
    goodsList(state){
        return state.searchlist.goodsList || []
    },
    trademarkList(state){
        return state.searchlist.trademarkList || []
    },
    attrsList(state){
        return state.searchlist.attrsList || []
    }
};


export default {
    state,
    mutations,
    actions,
    getters,
}
