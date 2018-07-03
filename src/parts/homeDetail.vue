<template>
  <div class="row h-100 align-items-center justify-content-center px-5">
    <div class="col-md-8 col-xs-12">
      <h1> Hi, I'm</h1>
      <h1> Rifaldhi AW</h1>
      <strong> Web Developer / Wordpess / Vue JS </strong><br>
      <div @click="swicthPart('contact')" class="btn btn-contact mt-3">Contact Me</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["swicthPart"])
  }
};
</script>

<style scoped>
.btn-contact {
  border: 2px solid white;
}
.btn-contact:hover {
  border: 2px solid #41b883;
  background-color: white;
  color: #41b883;
  font-weight: bold;
  transform: scale(1.1);
}
</style>
