<template>
  <div class="row parent-relative about-hg">
    <transition appear name="fade-kotak" mode="out-in">
      <div class="kotak-rt bg-kuning"> </div>
    </transition>
    <transition appear name="fade-kotak" mode="out-in">
      <div class="kotak-lb bg-kuning"></div>
    </transition>
    <transition appear name="fade-kotak" mode="out-in">
      <div class="kotak-rb bg-kuning"> </div>
    </transition>
    <transition appear name="fade-kotak" mode="out-in">
      <div class="kotak-lt bg-kuning"></div>
    </transition>
    <transition appear name="scale-p" mode="in-out">
      <div class=" photo">
        <img src="../assets/img/photobw.png">
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.photo {
  z-index: 9;
}
.photo img {
  width: 250px;
  position: absolute;
  top: 110px;
  left: 200px;
}
.about-hg {
  height: 100vh;
}
.kotak-rt {
  height: 150px;
  width: 100px;
  position: absolute;
  top: 90px;
  left: 370px;
}
.kotak-lb {
  height: 150px;
  width: 100px;
  position: absolute;
  top: 300px;
  left: 180px;
}
.kotak-rb {
  height: 150px;
  width: 100px;
  position: absolute;
  top: 300px;
  left: 370px;
}
.kotak-lt {
  height: 150px;
  width: 100px;
  position: absolute;
  top: 90px;
  left: 180px;
}
@media (max-width: 575.98px) {
  .photo img {
    left: 70px !important;
    width: 220px !important;
  }
  .kotak-rt {
    left: 210px !important;
  }
  .kotak-rb {
    left: 210px !important;
    top: 260px !important;
  }
  .kotak-lb {
    left: 50px !important;
    top: 260px !important;
  }
  .kotak-lt {
    left: 50px !important;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .about-hg {
    height: 550px !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .photo img {
    left: 60px !important;
  }
  .kotak-rt {
    left: 230px !important;
  }
  .kotak-rb {
    left: 230px !important;
  }
  .kotak-lb {
    left: 40px !important;
  }
  .kotak-lt {
    left: 40px !important;
  }
}
</style>
