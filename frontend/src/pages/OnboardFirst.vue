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
    <my-button type="firstButton">Дізнатися більше</my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: { MyButton },
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
  font-family: "Raleway", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.onboarding-text {
  text-align: center;
  color: var(--main-text-color, #0c0c0c);
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
  margin-bottom: 95px;
}
</style>
