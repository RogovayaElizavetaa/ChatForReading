<template>
  <button class="btn" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  width: 100%;
  border-radius: 24px;
  background-color: var(--main-button-color, #6792c1);
  padding: 17px 102px;
  border: transparent;

  color: var(--light-text-color, #fefefe);
  font-size: 18px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--accent-button-color, #325f91);
}

.btn[disabled] {
  background-color: var(--disabled-button-color, #d7d8d8);
}
</style>
