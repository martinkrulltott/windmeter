import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const SERVER_URL =
  process.env.VUE_APP_SERVER_URL ||
  "https://glacial-hollows-51912.herokuapp.com/";

export default new Vuex.Store({
  state: {
    stats: {
      windspeed: 0,
      gustspeed: 0,
      directiontext: "",
      directiondegrees: 0,
      isLoaded: false
    }
  },
  mutations: {
    SET_STATS(state, stats) {
      stats.isLoaded = true;
      state.stats = stats;
    }
  },
  actions: {
    loadStats({ commit }, payload) {
      const url = SERVER_URL + payload.spot;
      console.log("Fetching from: " + url);
      axios
        .get(url)
        .then(r => r.data)
        .then(stats => {
          commit("SET_STATS", stats);
        });
    }
  },
  getters: {}
});
