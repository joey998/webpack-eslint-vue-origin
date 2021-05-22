export default {
  namespaced: true,
  state: {
    b: 12,
    arr: [23, 3434, 43],
  },
  mutations: {
    syncChangeData(state, payload) {
      console.log("sync", state);
      state.b = payload;
      state.arr.push(payload);
    },
    syncChangeDataB(state, payload) {
      setTimeout(() => {
        console.log("sync", state);
        state.b = payload;
        state.arr.push(payload);
      }, 0);
    },
  },
  actions: {
    asyncChangeData(context) {
      console.log("async", context);
      context.commit("syncChangeData", 33);
    },

    asyncChangeDataB(context) {
      console.log("asyncB", context);
      context.dispatch("asyncChangeData", 999);
    },

    asyncChangeDataC(context) {
      setTimeout(() => {
        console.log("asyncC", context);
      }, 0);
      context.dispatch("asyncChangeData", 999);
    },
  },
};
