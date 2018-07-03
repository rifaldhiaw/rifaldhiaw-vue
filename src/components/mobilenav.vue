<template>
    <div id="mobilenav" class="d-block d-sm-none">
        <transition appear name="mobile-btn" mode="out-in">
          <div v-if="!showDetail" class="menu" key="main">
            <div class="rotate">
                <span @click="swicthDetail()" class="space bg-kuning">Go to Detail</span>
            </div>
          </div>
          <div v-else class="menu" key="detail">
            <div class="rotate">
                <span @click="swicthDetail()" class="space" >Go to Main</span>
            </div>
          </div>
        </transition>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations(["swicthDetail"])
  },
  computed: {
    ...mapState(["showDetail"])
  }
};
</script>

<style scoped>
#mobilenav {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  writing-mode: vertical-rl;
}
.rotate {
  transform: rotateZ(180deg);
  position: absolute;
  top: 35%;
}
.menu {
  position: relative;
  height: 100vh;
  width: 20px;
}
.space {
  padding: 20px 5px;
  background-color: #343a40;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}
a {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
}
a:hover {
  text-decoration: none;
  font-weight: bolder;
}
a.router-link-exact-active.router-link-active {
  text-decoration: none;
  font-weight: bolder;
}
</style>
