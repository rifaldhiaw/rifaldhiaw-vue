<template>
  <div id="app">
    <menubar/>
    <mobilenav/>
    <main>
      <div class="container-fluid">
        <div class="row">

          <!-- main n detail-mobile -->
          <transition appear name="mobile-detail" mode="out-in">
            <div v-if="!showDetail" key="main" class="col-md-6 vh-100 scroll-y">
              <!-- main -->
              <transition appear name="fade" mode="out-in">
                <component v-bind:is="mainCurrent"></component>
              </transition>
            </div>
            <div v-else key="detail" class="col-md-6 bg-kuning vh-100 scroll-y">
                <!-- detail-mobile -->
              <transition appear name="height" mode="out-in">
                <component v-bind:is="detailCurrent"></component>
              </transition>
            </div>
          </transition>

          <!-- detail -->
          <div class="col-md-6 bg-kuning d-none d-sm-block vh-100 scroll-y">
              <transition appear name="height" mode="out-in">
                <!-- detail -->
              <component v-bind:is="detailCurrent"></component>
              </transition>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import menubar from "./components/menubar.vue";
import mobilenav from "./components/mobilenav.vue";

import homeMain from "./parts/homeMain.vue";
import homeDetail from "./parts/homeDetail.vue";
import aboutMain from "./parts/aboutMain.vue";
import aboutDetail from "./parts/aboutDetail.vue";
import skillsMain from "./parts/skillsMain.vue";
import skillsDetail from "./parts/skillsDetail.vue";
import worksMain from "./parts/worksMain.vue";
import worksDetail from "./parts/worksDetail.vue";
import contactMain from "./parts/contactMain.vue";
import contactDetail from "./parts/contactDetail.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapState(["showDetail", "mainCurrent", "detailCurrent"])
  },
  components: {
    menubar,
    mobilenav,
    homeMain,
    homeDetail,
    aboutMain,
    aboutDetail,
    skillsMain,
    skillsDetail,
    worksMain,
    worksDetail,
    contactMain,
    contactDetail
  }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "assets/scss/bootstrap-custom.scss";
@import "assets/scss/transition.scss";
@import "assets/scss/global.scss";

#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow: hidden;
}
body {
  color: #fff;
  background: linear-gradient(rgba(37, 39, 39, 0.9), rgba(37, 39, 39, 0.9));
}
</style>
