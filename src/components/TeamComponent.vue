<script setup>
import {onMounted} from "vue";
import {onBeforeRouteLeave} from "vue-router";

onMounted(() => {

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav : true,
    navText : [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  });


})

onBeforeRouteLeave(() => {
  $(".team-carousel").trigger('destroy.owl.carousel');
})

</script>

<template>
  <!-- Team Start -->
  <div class="container-fluid pb-5 mb-5 team py-5 my-5">
    <div class="container pb-5">
      <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style="max-width: 600px;">
        <h5 class="text-muted">Our Team</h5>
        <h1>Meet our Team</h1>
      </div>
      <div class="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
        <div class="rounded team-item">
          <div class="team-content">
            <div class="team-img-icon">
              <div class="team-img rounded-circle">
                <img src="/img/team-1.jpg" class="img-fluid w-100 rounded-circle" alt="">
              </div>
              <div class="team-name text-center py-3">
                <h4 class="">Emmanuel Essien</h4>
                <p class="m-0">CEO</p>
              </div>
              <div class="team-icon d-flex justify-content-center pb-4">
                <a class="btn btn-square btn-tert text-white rounded-circle m-1"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded team-item">
          <div class="team-content">
            <div class="team-img-icon">
              <div class="team-img rounded-circle">
                <img src="/img/team-2.jpg" class="img-fluid w-100 rounded-circle" alt="">
              </div>
              <div class="team-name text-center py-3">
                <h4 class="">Full Name</h4>
                <p class="m-0">Designation</p>
              </div>
              <div class="team-icon d-flex justify-content-center pb-4">
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded team-item">
          <div class="team-content">
            <div class="team-img-icon">
              <div class="team-img rounded-circle">
                <img src="/img/team-3.jpg" class="img-fluid w-100 rounded-circle" alt="">
              </div>
              <div class="team-name text-center py-3">
                <h4 class="">Full Name</h4>
                <p class="m-0">Designation</p>
              </div>
              <div class="team-icon d-flex justify-content-center pb-4">
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded team-item">
          <div class="team-content">
            <div class="team-img-icon">
              <div class="team-img rounded-circle">
                <img src="/img/team-4.jpg" class="img-fluid w-100 rounded-circle" alt="">
              </div>
              <div class="team-name text-center py-3">
                <h4 class="">Full Name</h4>
                <p class="m-0">Designation</p>
              </div>
              <div class="team-icon d-flex justify-content-center pb-4">
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square btn-tert text-white rounded-circle m-1" href=""><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->
</template>

<style scoped>

</style>