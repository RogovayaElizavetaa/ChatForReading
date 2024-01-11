<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-width: 320px;
  max-width: 768px;
  margin: 0 auto;
}
</style>
