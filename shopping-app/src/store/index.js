import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    showContent: false,
  },
  mutations: {
    setSideList(state, list) {
      state.sideList = list;
    },
    setShowContent(state, bool) {
      state.showContent = bool;
    },
  },
  actions: {
    async getSideList({ commit }, type) {
      commit('setShowContent', false);
      const value = await api.getSideList(type);
      console.log(value);
      commit('setSideList', value);
      commit('setShowContent', true);
    },
  },
  modules: {
  },
});
