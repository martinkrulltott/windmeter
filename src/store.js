import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const SERVER_URL =
  process.env.VUE_APP_SERVER_URL ||
  "https://kitewindscraper.herokuapp.com/";

export default new Vuex.Store({
  state: {
    stats: {
      link: "",
      windspeed: 0,
      gustspeed: 0,
      directiontext: "",
      directiondegrees: 0,
      isLoaded: false,
      hasError: false
    }
  },
  mutations: {
    SET_STATS(state, stats) {
      if (stats && stats.windspeed) {
        stats.isLoaded = true;
        state.stats = stats;
      } else {
        state.stats.hasError = true;
      }
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
