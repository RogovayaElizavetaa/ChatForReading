<template>
  <start-page></start-page>
</template>

<script>
import StartPage from "./components/StartPage.vue";
export default {
  name: "App",
  components: { StartPage },
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
