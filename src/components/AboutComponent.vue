<script setup>

</script>

<template>
  <!-- About Start -->
  <div class="container-fluid py-5 my-5">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
          <div class="h-100 position-relative">
            <img src="/img/about-1.jpg" class="img-fluid w-75 rounded" alt="" style="margin-bottom: 25%;">
            <div class="position-absolute w-75" style="top: 25%; left: 25%;">
              <img src="/img/about-2.jpg" class="img-fluid w-100 rounded" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
          <h5 class="text-muted">About Us</h5>
          <h1 class="mb-4">Quality & Experience IT Solution Company</h1>
          <p>
            As a smart and agile software development agency, we custom engineer
            sophisticated digital solutions, that enable our clients to stay ahead of the game,
            and thrive in this ever-changing digital landscape
          </p>
          <p class="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
          <router-link :to="{name: 'about'}" class="btn btn-teal rounded-pill px-5 py-3 text-white border-0">
            More Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<style scoped>

</style>