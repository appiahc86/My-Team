<script setup>

const hideToggler = () => {

 const hide = document.querySelector("#navbarCollapse");
  hide.classList.remove("show")
}

</script>

<template>
  <!-- Spinner Start -->
  <div id="spinner" class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-grow text-primary" role="status"></div>
  </div>
  <!-- Spinner End -->

  <!-- Topbar Start -->
  <div class="container-fluid bg-dark py-2 d-none d-md-flex">
    <div class="container">
      <div class="d-flex justify-content-between topbar">
        <div class="top-info">
          <small class="me-3 text-white-50"><a><i class="fas fa-map-marker-alt me-2 text-white"></i></a>Ejisu-Fumesua, AK-218-3548</small>
          <small class="me-3 text-white-50"><a><i class="fas fa-envelope me-2 text-white"></i></a>Email@Example.com</small>
        </div>
        <div id="note" class="text-white d-none d-xl-flex"><small>Let's help you to expand your Business</small></div>
        <div class="top-link">
          <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-facebook-f text-primary"></i></a>
          <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-twitter text-primary"></i></a>
          <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i class="fab fa-linkedin-in text-primary"></i></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <div class="container-fluid navbar-teal">
    <div class="container">
      <nav class="navbar navbar-dark navbar-expand-lg py-0">
          <router-link :to="{name: 'home'}" class="navbar-brand" @click="hideToggler">
            <h1 class="text-white fw-bold d-block">My<span class="text-secondary">Team</span> </h1>
          </router-link>
        <div class="navbar-toggler me-0 shadow-none border-0" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
             style="transform: rotate(90deg); cursor: pointer;">
          <span class="text-white" style="font-size: 1.5em;" >...</span>
        </div>
        <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
          <div class="navbar-nav ms-auto mx-xl-auto p-0">
            <router-link :to="{name: 'home'}" class="nav-item nav-link" @click="hideToggler">Home</router-link>
            <router-link :to="{name: 'services'}" class="nav-item nav-link" @click="hideToggler">Services</router-link>
            <router-link :to="{name: 'projects'}" class="nav-item nav-link" @click="hideToggler">Projects</router-link>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
              <div class="dropdown-menu rounded">
                <router-link :to="{name: 'about'}" class="dropdown-item" @click="hideToggler">About Us</router-link>
                <router-link :to="{name: 'team'}" class="dropdown-item" @click="hideToggler">Our Team</router-link>
              </div>
            </div>
            <router-link :to="{name: 'contact'}" class="nav-item nav-link" @click="hideToggler">Contact</router-link>
          </div>
        </div>
        <div class="d-none d-xl-flex flex-shirink-0">
          <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
            <a href="tel:+233243321512" class="position-relative animated tada infinite">
              <i class="fa fa-phone-alt text-white fa-2x"></i>
              <div class="position-absolute" style="top: -7px; left: 20px;">
                <span><i class="fa fa-comment-dots text-white"></i></span>
              </div>
            </a>
          </div>
          <div class="d-flex flex-column pe-4 border-end">
            <span class="text-white-50">Have any questions?</span>
            <span class="text-white">Call: +233 243 321 512</span>
          </div>

        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->


  <router-view></router-view>


  <!-- Footer Start -->
  <div class="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
    <div class="container pt-5 pb-4">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <a href="">
            <h1 class="text-white fw-bold d-block">My<span class="text-secondary">Team</span> </h1>
          </a>
          <p class="mt-4 text-light">
            As a smart and agile software development agency, we custom engineer sophisticated
            digital solutions, that enable our clients to stay ahead of the game.
          </p>
          <div class="d-flex hightech-link">
            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-facebook-f text-primary"></i></a>
            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-twitter text-primary"></i></a>
            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-0"><i class="fab fa-linkedin-in text-primary"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="h3 my-text">Quick Links</a>
          <div class="mt-4 d-flex flex-column short-link">
            <router-link :to="{name: 'about'}" class="mb-2 text-white"><i class="fas fa-angle-right text-muted me-2"></i>About us</router-link>
            <router-link :to="{name: 'contact'}" class="mb-2 text-white"><i class="fas fa-angle-right text-muted me-2"></i>Contact us</router-link>
            <router-link :to="{name: 'services'}" class="mb-2 text-white"><i class="fas fa-angle-right text-muted me-2"></i>Our Services</router-link>
            <router-link :to="{name: 'projects'}" class="mb-2 text-white"><i class="fas fa-angle-right text-muted me-2"></i>Our Projects</router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <a class="h3 my-text">Contact Us</a>
          <div class="text-white mt-4 d-flex flex-column contact-link">
            <a href="#" class="pb-3 text-light border-bottom border-primary"><i class="fas fa-map-marker-alt text-muted me-2"></i> Ejisu-Fumesua, AK-218-3548</a>
            <a href="tel:233243321512" class="py-3 text-light border-bottom border-primary"><i class="fas fa-phone-alt text-muted me-2"></i> +233 243 321 512</a>
            <a href="#" class="py-3 text-light border-bottom border-primary"><i class="fas fa-envelope text-muted me-2"></i> info@exmple.con</a>
          </div>
        </div>
      </div>
      <hr class="text-light mt-5 mb-4">
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <span class="text-light"><a href="#" class="text-secondary"><i class="fas fa-copyright text-muted me-2"></i>Your Site Name</a>, All right reserved.</span>
        </div>

      </div>
    </div>
  </div>
  <!-- Footer End -->


  <!-- Back to Top -->
  <a href="#" class="btn btn-info btn-square rounded-circle back-to-top"><i class="fa fa-arrow-up text-white"></i></a>


</template>


<style>
#app {
.btn-tert{
  background: rgba(13, 73, 86, 0.78);
}
  .my-text{
    background: -webkit-linear-gradient(rgba(135, 18, 145, 0.84), #ece3e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .navbar-teal{
    background: linear-gradient(rgba(135, 18, 145, 0.84), #e094f6);
  }

  .btn-teal{
    background: linear-gradient(rgba(135, 18, 145, 0.84), #e094f6) !important;
    color: white !important;
  }
}
</style>
