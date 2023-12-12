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
          <img src="/img/carousel2.webp" class="img-fluid w-100" alt="First slide">
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
          <img src="/img/carousel1.webp" class="img-fluid w-100" alt="Second slide">
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
  <div class="container-fluid py-5 my-5">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
          <div class="h-100 position-relative">
            <img src="/img/about2.webp" class="img-fluid w-75 rounded" alt="" style="margin-bottom: 25%;">
            <div class="position-absolute w-75" style="top: 25%; left: 25%;">
              <img src="/img/about1.webp" class="img-fluid w-100 rounded" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
          <h5 class="text-muted">About Us</h5>
          <h1 class="mb-4">Quality & Experience IT Solution Company</h1>
          <p>
            We put together a bunch of passionate minds to transform your visions
            into reality imparting an awesome digital experience for your
            users. From website design, development, scalable mobile apps to SaaS platforms,
            the solution we engineer accelerate efficiency and fuel growth for our clients.
          </p>
          <p class="mb-4">
            We are committed to achieving and pushing the level of
            performance at all times. Leveraging the power of technology,
            we deliver end-to-end solutions for multi-million funded
            start-ups to small and medium enterprises. Our office presence at
            Ejisu-Fumesua, GPS Address: AK-218-3548, Ghana.
          </p>
          <router-link :to="{name: 'about'}" class="btn btn-teal rounded-pill px-5 py-3 text-white border-0">
            More Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
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

  <!-- Contact Start -->
 <ContactsComponent />
  <!-- Contact End -->
</div>
</template>

<style scoped>

</style>