import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import storage from '@/utils/storage'

//状态；
const state = {
	isLogined: false,
	lang: 'cn'
}
// 获取状态信息
const getters = {}

//提交；
const mutations = {
	signIn(){
		let isLogined = storage.getStorage("isLogined");  
  		if(isLogined){
			state.isLogined=true;
		}
	},
	signOut(){
		state.isLogined=false
		storage.setStorage("isLogined",false,-1);
	}
}
//间接处理提交；
const actions = {
	signIn: ({commit})=>commit('signIn'),
	signOut: ({commit})=>commit('signOut')
}

export default new Vuex.Store({
	state,
	getters,	
	mutations,
	actions
})