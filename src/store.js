import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const SERVER_URL =
  process.env.VUE_APP_SERVER_URL ||
  "";

export default new Vuex.Store({
  state: {
    stats: {
      name: "",
      link: "",
      windspeed: 0,
      gustspeed: 0,
      directiontext: "",
      directiondegrees: 0,
      temperature: 0,
      isLoaded: false,
      hasError: false
    }
  },
  mutations: {
    SET_STATS(state, stats) {
      if (stats && stats.WindSpeed) {
        const result = {
          name: stats.Name,
          link: stats.API_JSON_Return_Url,
          windspeed: stats.WindSpeed,
          gustspeed: stats.Gust,
          directiontext: stats.WindDirection_Name,
          directiondegrees: stats.WindDirection,
          temperature: stats.Temperature,
          isLoaded: true,
          hasError: false
        }
        state.stats = result;
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
