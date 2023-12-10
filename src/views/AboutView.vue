<script setup>
import TopBanner from "@/components/TopBanner.vue";
import TeamComponent from "@/components/TeamComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
</script>

<template>
  <div class="">

    <TopBanner  page="About" title="About Us"/>

    <!-- About Start -->
    <AboutComponent />
    <!-- About End -->

    <!-- Team Start -->
    <TeamComponent />
    <!-- Team End -->

  </div>
</template>

<style scoped>

</style>