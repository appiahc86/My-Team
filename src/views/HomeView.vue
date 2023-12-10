<script setup>

import ContactsComponent from "@/components/ContactsComponent.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FactsComponent from "@/components/FactsComponent.vue";

</script>

<template>
<div class="">

  <!-- Carousel Start -->
  <div class="container-fluid px-0">
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img src="/img/carousel-1.jpg" class="img-fluid" alt="First slide">
          <div class="carousel-caption">
            <div class="container carousel-content">
<!--              <h6 class="text-white h4 animated fadeInUp d-none d-md-inline">We Help You Grow</h6>-->
              <br class="d-md-none">
              <h1 class="text-white display-1 mb-2 mb-md-4 animated fadeInRight">Fueling Businesses With Technology!</h1>
              <p class="mb-2 mb-md-4 text-white fs-5 animated fadeInDown">
                In an increasingly digital world, businesses are relying more than
                ever on software solutions to enhance productivity.
              </p>
              <router-link :to="{name: 'about'}"
                           class="me-2 mb-2 px-4 py-sm-3 px-sm-5 btn btn-primary
                           rounded-pill carousel-content-btn1 animated fadeInLeft">
                Read More
              </router-link>

              <router-link :to="{name: 'contact'}"
                           class="me-2 mb-2 px-4 py-sm-3 px-sm-5 btn btn-info
                           rounded-pill carousel-content-btn1 animated fadeInRight">
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousel-2.jpg" class="img-fluid" alt="Second slide">
          <div class="carousel-caption">
            <div class="container carousel-content">
<!--              <h6 class="text-white h4 animated fadeInUp d-none d-md-inline">Best IT Solutions</h6>-->
              <br class="d-md-none">
              <h1 class="text-white display-1 mb-2 mb-md-4 animated fadeInLeft">Your Technology Partner!</h1>
              <p class="mb-2 mb-md-4 text-white fs-5 animated fadeInDown">
                Contact us for innovative and impactful
                digital solutions
              </p>
              <router-link :to="{name: 'about'}"
                           class="me-2 mb-2 px-4 py-sm-3 px-sm-5 btn btn-primary
                           rounded-pill carousel-content-btn1 animated fadeInLeft">
                Read More
              </router-link>

              <router-link :to="{name: 'contact'}"
                           class="me-2 mb-2 px-4 py-sm-3 px-sm-5 btn btn-info
                           rounded-pill carousel-content-btn1 animated fadeInRight">
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev btn-teal" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next btn-teal" type="button" data-bs-target="#carouselId" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- Carousel End -->


  <!-- Fact Start -->
  <FactsComponent />
  <!-- Fact End -->


  <!-- About Start -->
  <AboutComponent />
  <!-- About End -->


  <!-- Services Start -->
  <ServicesComponent />
  <!-- Services End -->


  <!-- Project Start -->
  <ProjectsComponent />
  <!-- Project End -->

  <!-- Team Start -->
  <TeamComponent />
  <!-- Team End -->

  <!-- Testimonial Start -->
  <TestimonialComponent />
  <!-- Testimonial End -->


  <!-- Contact Start -->
 <ContactsComponent />
  <!-- Contact End -->
</div>
</template>

<style scoped>

</style>