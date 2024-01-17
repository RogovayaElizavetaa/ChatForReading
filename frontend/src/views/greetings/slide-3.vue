
<template>
    <div class="slide container" v-cloak>
        <img class="slide__img" src="@/assets/img/titleslidesecond.png" alt="slide">
        <div class="slide__text">
          <div class="slide__tittle h2">ВІДКРИВАЙ</div>
          <div class="slide__description h3">молодих авторів</div>
        </div>
        <btn 
          :title="buttonTitle" 
          @click="nextpage"
          @skip-all="skipall"
          :skiptext="buttonskip"
        />
        <page-indicator :totalPages="3" :currentPage="2"></page-indicator>
    </div>
    
  </template>
  <script>
  import btn from '@/components/greetings/button-table.vue';
  import PageIndicator from "@/components/UI/PageIndicator.vue";
  export default{
    components: {
      btn,
      PageIndicator,
    },
    data() {
      return {
        buttonTitle: '... і ще більше...',
        buttonskip: 'Пропустити',
      };
    },
    methods: {
      nextpage(){
        this.$router.push('slide4')
      },
      skipall(){
        this.$router.push('#')
      }
    }
   }
  
  </script>
  