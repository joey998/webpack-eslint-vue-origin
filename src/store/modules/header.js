export default {
  namespaced: true,
  state: {
    headerNav: [],
  },
  mutations: {
    changeNav(state, payload) {
      state.headerNav = payload;
    },
  },
};
