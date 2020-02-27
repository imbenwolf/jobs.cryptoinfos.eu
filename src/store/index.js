import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    adviewJobs: {}
  },
  mutations: {
    setAdviewJobs: (store, adviewJobs) => (store.adviewJobs = adviewJobs)
  },
  actions: {
    getAdviewJobs: async context => {
      const { data } = await axios.get(
        "/adview?publisher=2164&keyword=Blockchain&location=London&radius=25&jt=&snippet=full&salary_from=&salary_to=&channel=&limit=16"
      );
      context.commit("setAdviewJobs", data);
    }
  }
});
