<template>
  <div>
    <div class="background-onbording-first">
      <img
        class="girl-one"
        src="@/assets/girl1.svg"
        alt="Дівчина що читає книгу"
      />
      <img
        class="girl-two"
        src="@/assets/girl2.svg"
        alt="Дівчина що розмірковує над книгою"
      />
    </div>
    <h2 class="onboardin-title">обговорюй</h2>
    <p class="onboarding-text">прочитані книги українською</p>
    <my-button
      type="firstButton"
      class="first-button"
      @click="handleFirstButtonClick"
      >Дізнатися більше</my-button
    >
    <my-button
      type="secondButton"
      class="second-button"
      @click="handleSecondButtonClick"
      >Пропустити</my-button
    >
    <page-indicator :totalPages="3" :currentPage="currentPage"></page-indicator>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import PageIndicator from "@/components/UI/PageIndicator.vue";
export default {
  components: { MyButton, PageIndicator },
  data() {
    return {
      currentPage: 0,
    };
  },
  methods: {
    handleFirstButtonClick() {
      console.log("Button1");
    },
    handleSecondButtonClick() {
      console.log("Button2");
    },
  },
};
</script>

<style scoped>
.background-onbording-first {
  width: 100%;
  height: 236px;
  border-radius: 24px;
  background: linear-gradient(180deg, #ebf3e4 0%, #bbdd9c 100%);
  position: relative;
  margin-bottom: 142px;
}
.girl-one {
  position: absolute;
  bottom: -30px;
  left: 27px;
}
.girl-two {
  position: absolute;
  bottom: -19px;
  right: 24px;
}
.onboardin-title {
  text-align: center;
  color: var(--accent-text-color, #325f91);
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.onboarding-text {
  text-align: center;
  color: var(--main-text-color, #0c0c0c);
  font-size: 20px;
  text-transform: lowercase;
  margin-bottom: 95px;
}
.first-button {
  margin-bottom: 8px;
}

.second-button {
  margin-bottom: 35px;
}
</style>
