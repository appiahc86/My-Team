<script setup>
defineProps({

  title: {
    type: String,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
<div class="">

  <!-- Page Header Start -->
  <div class="container-fluid page-header py-5">
    <div class="container text-center py-5">
      <h1 class="display-2 text-white mb-4 animated slideInDown">{{ title }}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item">
            <router-link :to="{name: 'home'}" class="text-decoration-none text-white">Home</router-link>
          </li>
          <li class="breadcrumb-item text-white-50" aria-current="page">{{ page }}</li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- Page Header End -->

</div>
</template>

<style scoped>

</style>