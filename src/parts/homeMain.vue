<template>
  <div class="row h-100 align-items-center">
    <div class="col-12 text-center logo">
      <transition appear name="logo">
        <img src="../assets/img/logoaw.png">
      </transition>
      <br>
      <transition appear name="logo-title">
        <div>
          <strong>Build with vue JS and Firebase</strong>
          <p>Vue, Vuex, Vue-Router, Firebase, Firestore <br> *it has different layout on mobile</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  font-size: 12px;
}

@media (max-width: 575.98px) {
  .logo img {
    width: 250px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .logo img {
    width: 250px;
  }
}

@media (min-width: 768px) {
  .logo img {
    width: 300px;
  }
}
</style>
