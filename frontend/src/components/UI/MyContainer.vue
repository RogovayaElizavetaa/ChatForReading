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
  padding: 48px 16px 24px 16px;
}
</style>
