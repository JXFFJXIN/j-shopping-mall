import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, Info) {
      state.user = Info;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, Info) {
      commit('setUserInfo', Info); // 改变state
      setCookie(Info); // 改变cookie
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {
  },
});
