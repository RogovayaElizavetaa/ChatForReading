<template>
  <button class="btn" :class="buttonClass" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonClass() {
      return {
        "first-button": this.type === "firstButton",
        "second-button": this.type === "secondButton",
      };
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  width: 100%;
  padding: 17px 0;
  border: transparent;

  font-family: inherit;

  cursor: pointer;
}

.first-button {
  border-radius: 24px;
  background-color: var(--main-button-color, #6792c1);
  color: var(--light-text-color, #fefefe);
  font-size: 18px;
  font-weight: 600;
}
.first-button:hover {
  background-color: var(--accent-button-color, #325f91);
}

.first-button[disabled] {
  background-color: var(--disabled-button-color, #d7d8d8);
}

.second-button {
  background-color: var(--background-color, #fdfdfd);
  color: var(--disabled-text-color, #939393);
  font-size: 18px;
  font-weight: 500;
}

.second-button:hover {
  color: var(--accent-text-color, #325f91);
}
</style>
