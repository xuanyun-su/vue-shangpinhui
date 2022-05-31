import {reqGoodsInfo,reqAddOrUpdateShopCart }from "@/api"
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodinfo:{},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state,goodinfo){
        state.goodinfo = goodinfo
    }
}
const actions = {
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code === 200){
            commit("GETGOODINFO",result.data);
        }
    },
    async AddOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code===200){
            return "ok"
        }else{
            return Promise(new Error("faile"))
        }
    }
}
const getters = {
    skuSaleAttrValueList(state){
        return state.goodinfo.skuInfo.skuSaleAttrValueList || [];
    },
    categoryView(state){
        return state.goodinfo.categoryView || {}
    },
    skuInfo(){
        return state.goodinfo.skuInfo || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}