<template>
  <my-container>
    <!-- <start-page></start-page> -->
    <onboard-first></onboard-first>
  </my-container>
</template>

<script>
import MyContainer from "./components/UI/MyContainer.vue";
// import StartPage from "./components/StartPage.vue";
import OnboardFirst from "./pages/OnboardFirst.vue";
export default {
  name: "App",
  components: { MyContainer, OnboardFirst },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #fdfdfd;
}
</style>
