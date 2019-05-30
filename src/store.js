import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default new Vuex.Store({
  state: {
    stats: []
  },
  mutations: {
    SET_STATS(state, stats) {
      state.stats = stats;
    }
  },
  actions: {
    loadStats({ commit }, payload) {
      axios
        .get(SERVER_URL + payload.spot)
        .then(r => r.data)
        .then(stats => {
          commit("SET_STATS", stats);
        });
    }
  },
  getters: {}
});
