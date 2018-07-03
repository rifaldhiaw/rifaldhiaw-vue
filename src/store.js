import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDetail: false,
    mainCurrent: "homeMain",
    detailCurrent: "homeDetail",
    isHome: true,
    isAbout: false,
    isSkills: false,
    isWorks: false,
    isContact: false
  },
  mutations: {
    swicthDetail(state) {
      state.showDetail = !state.showDetail;
    },
    swicthPart(state, part) {
      switch (part) {
        case "home":
          state.mainCurrent = "homeMain";
          state.detailCurrent = "homeDetail";
          state.isHome = true;
          state.isAbout = state.isSkills = state.isWorks = state.isContact = false;
          break;
        case "about":
          state.mainCurrent = "aboutMain";
          state.detailCurrent = "aboutDetail";
          state.isAbout = true;
          state.isHome = state.isSkills = state.isWorks = state.isContact = false;
          break;
        case "skills":
          state.mainCurrent = "skillsMain";
          state.detailCurrent = "skillsDetail";
          state.isSkills = true;
          state.isAbout = state.isHome = state.isWorks = state.isContact = false;
          break;
        case "works":
          state.mainCurrent = "worksMain";
          state.detailCurrent = "worksDetail";
          state.isWorks = true;
          state.isAbout = state.isSkills = state.isHome = state.isContact = false;
          break;
        case "contact":
          state.mainCurrent = "contactMain";
          state.detailCurrent = "contactDetail";
          state.isContact = true;
          state.isAbout = state.isSkills = state.isWorks = state.isHome = false;
          break;
      }
    }
  }
});
