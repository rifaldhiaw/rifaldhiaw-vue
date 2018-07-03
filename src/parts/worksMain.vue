<template>
  <div class="row justify-content-center my-5 py-5 px-3">
    <div class="col-md-11 mt-3">
      <!-- baris1 -->
      <div class="row my-2">
        <div class="col-sm-6 col-md-12 col-lg-6 text-center web-port px-4">
          <transition appear name="scale-p">
            <img src="../assets/img/web1.png">
          </transition>
          <div class="mb-2"></div>
          <transition appear name="scale-nameworks">
            <p class="link-works">republiktrader.com</p>
          </transition>
        </div>
        <div class="col-sm-6 col-md-12 col-lg-6 text-center web-port px-4">
          <transition appear name="scale-p">
            <img src="../assets/img/web2.png">
          </transition>
          <div class="mb-2"></div>
          <transition appear name="scale-nameworks">
            <p class="link-works">maximax2u.com</p>
          </transition>
        </div>
      </div>
      <!-- baris2 -->
      <div class="row my-2">
        <div class="col-sm-6 col-md-12 col-lg-6 text-center web-port px-4">
          <transition appear name="scale-p">
            <img src="../assets/img/web3.png">
          </transition>
          <div class="mb-2"></div>
          <transition appear name="scale-nameworks">
            <p class="link-works">forumdaslampung.com</p>
          </transition>
        </div>
        <div class="col-sm-6 col-md-12 col-lg-6 text-center web-port px-4">
          <transition appear name="scale-p">
            <img src="../assets/img/web4.png">
          </transition>
          <div class="mb-2"></div>
          <transition appear name="scale-nameworks">
            <p class="link-works">word form filler (on Github)</p>
          </transition>
        </div>
      </div>
      <!-- baris2 end -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.web-port img {
  width: 150px;
  position: relative;
}
.link-works {
  border-bottom: 3px solid #41b883;
}
</style>
