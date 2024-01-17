<template>
  <div class="slide container" v-cloak>
      <img class="slide__image" src="@/assets/img/titleslidethree.png" alt="slide">
      <div class="slide__text">
        <div class="slide__tittle h2">ОБМІНЮЙСЯ</div>
        <div class="slide__description h3">прочитаними книгами</div>
      </div>
      <btn 
        :title="buttonTitle" 
        @click="nextpage"
        @skip-all="skipall"
        :skiptext="buttonskip"
      />
      <page-indicator :totalPages="3" :currentPage="3"></page-indicator>
  </div>
  
</template>
<script>
import btn from '@/components/greetings/button-table.vue';
import PageIndicator from "@/components/UI/PageIndicator.vue";
export default{
  components: {
    btn,
    PageIndicator
  },
  data() {
    return {
      buttonTitle: 'Почнемо!',
      buttonskip: 'Пропустити',
    };
  },
  methods: {
    nextpage(){
      this.$router.push('#')
    },
    skipall(){
      this.$router.push('#')
    }
  }
 }

</script>

  











