
<template>
  <div class="slide container" v-cloak>
      <img class="slide__imag" src="@/assets/img/Slide.png" alt="slide">
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
  
</template>
<script>
import btn from '@/components/greetings/button-table.vue';
export default{
  components: {
    btn,
  },
  data() {
    return {
      buttonTitle: 'Дізнатися більше',
      buttonskip: 'Пропустити',
    };
  },
  methods: {
    nextpage(){
      this.$router.push('slide3')
    },
    skipall(){
      this.$router.push('#')
    }
  }
 }

</script>
