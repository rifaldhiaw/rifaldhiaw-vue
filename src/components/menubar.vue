<template>
  <div id="menubar" class="container-fluid text-kuning w-50">
    <div class="row align-items-center justify-content-start h-100">
      <div class=" col-md-12 col-sm-12">
        <div class="row justify-content-center">
          <div class="col-2">
            <a @click="swicthPart('home')" :class="{active:isHome}">Home</a>
          </div>
          <div class="col-2">
            <a @click="swicthPart('about')" :class="{active:isAbout}">About</a>
          </div>
          <div class="col-2">
            <a @click="swicthPart('skills')" :class="{active:isSkills}">Skills</a>
          </div>
          <div class="col-2">
            <a @click="swicthPart('works')" :class="{active:isWorks}">Works</a>
          </div>
          <div class="col-2">
            <a @click="swicthPart('contact')" :class="{'active':isContact}">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["swicthPart"])
  },
  computed: {
    ...mapState(["isHome", "isAbout", "isSkills", "isWorks", "isContact"])
  }
};
</script>

<style scoped>
#menubar {
  width: 50%;
  position: fixed;
  bottom: 0;
  height: 50px;
  z-index: 99;
  border-left: 5px solid #41b883;
}
@media (max-width: 767.98px) {
  #menubar {
    width: 100% !important;
    padding: 0 20px !important;
    background-color: #343a40;
    border-top: 5px solid #41b883 !important;
    border-left: none;
  }
  a {
    font-size: 14px !important;
  }
  a:hover {
    font-size: 16px !important;
  }
  a.active {
    font-size: 16px !important;
  }
}
a {
  color: #fff !important;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
}
a:hover {
  text-decoration: none;
  font-size: 18px;
  border-bottom: solid 2px #41b883;
}
a.active {
  text-decoration: none;
  font-size: 18px;
  border-bottom: solid 2px #41b883;
}
</style>
