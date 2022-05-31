import { reqAddressInfo, reqOrder } from "@/api";

const state = {
    address:[],
    orderInfo: {}
};
const actions = {
    async getUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code === 200){
            commit("GETUSERADDRESS",result.data)
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrder()
        if(result.code === 200){
         commit("GETORDERINFO",result.data) 
        }
    }
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}