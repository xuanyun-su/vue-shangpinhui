import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api";

const state = {
    cartList:[]
};
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }
};
const actions = {
    async getCartList({commit}){
            let result  = await reqCartList()
            console.log(result)
            if(result.code===200){
                commit("GETCARTLIST",result.data)
            }
    },
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        // 接口有问题 还未拿postman测试
        if(result.code === 200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked);
        console.log(result)
        if(result.code === 200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll = [];
        getters.CartList.cartInfoList.forEach(item => {
            let promise = item.isChecked===1?dispatch("deleteCartListBySkuId",item.skuId):'';
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
};
const getters = {
    CartList(state){
        return state.cartList[0] || {}
    },
    cartInfoList(state){
        return state.CartList.cartInfoList
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}