<template>
  <!-- <div class="container"> -->
  <div class="slide container" v-cloak>
    <div class="background-onbording background-onbording-first">
      <img
        class="girl-one"
        src="@/assets/img/girl1.svg"
        alt="Дівчина що читає книгу"
      />
      <img
        class="girl-two"
        src="@/assets/img/girl2.svg"
        alt="Дівчина що розмірковує над книгою"
      />
    </div>
    <div class="slide__text">
      <div class="slide__tittle h2">ОБГОВОРЮЙ</div>
      <div class="slide__description h3">прочитані книги українською</div>
    </div>
    <btn
      :title="buttonTitle"
      @click="nextpage"
      @skip-all="skipall"
      :skiptext="buttonskip"
    />
  </div>
  <!-- </div> -->
</template>
<script>
import btn from "@/components/greetings/button-table.vue";
export default {
  components: {
    btn,
  },
  data() {
    return {
      buttonTitle: "Дізнатися більше",
      buttonskip: "Пропустити",
    };
  },
  methods: {
    nextpage() {
      this.$router.push("slide3");
    },
    skipall() {
      this.$router.push("#");
    },
  },
};
</script>
