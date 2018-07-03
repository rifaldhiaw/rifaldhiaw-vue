<template>
  <div class="row px-5 py-5 vh-100 align-items-center">
    <div class="col">
      <transition appear name="fade" :duration="10000">
        <div class="row">
          <div class="col">
            <h2 class="text-kuning">Contact Me</h2>
          </div>
        </div>
      </transition>
      <div class="my-5"></div>
      <transition appear name="fade" mode="out-in">
        <div class="row">
          <div class="col">
            <h3 class="text-kuning">Email:</h3>
            <p>rifaldhiaw@gmail.com</p>
          </div>
        </div>
      </transition>
      <transition appear name="fade" mode="in-out">
        <div class="row ">
          <div class="col">
            <h3 class="text-kuning">Location:</h3>
            <p>Jl. Asahan, Sukabumi Indah, Sukabumi, <br>Kec. Sukabumi, Kota Bandar Lampung, Lampung 35122</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
