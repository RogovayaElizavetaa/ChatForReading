<template>
  <my-container>
    <!-- <starts-page></starts-page> -->
    <onboard-first></onboard-first>
  </my-container>
</template>

<script>
import MyContainer from "./components/UI/MyContainer.vue";
// import StartsPage from "./pages/StartsPage.vue";
import OnboardFirst from "./pages/OnboardFirst.vue";
export default {
  name: "App",
  components: { MyContainer, OnboardFirst },
};
</script>

<style></style>
