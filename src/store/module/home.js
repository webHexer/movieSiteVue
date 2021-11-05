const initialState = () => ({});

export default {
  namespaced: true,
  strict: true,
  state: initialState(),

  actions: {
    resetLocationSectionState({ commit }) {
      commit("RESET_STATE");
    },
  },

  mutations: {
    RESET_STATE: (state) => {
      const s = initialState();
      Object.keys(s).forEach((key) => {
        state[key] = s[key];
      });
    },
  },
};
