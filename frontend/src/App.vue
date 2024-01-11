<template>
  <my-container>
    <start-page></start-page>
  </my-container>
</template>

<script>
import MyContainer from "./components/UI/MyContainer.vue";
import StartPage from "./components/StartPage.vue";
export default {
  name: "App",
  components: { MyContainer, StartPage },
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
