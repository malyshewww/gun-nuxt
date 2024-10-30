<template lang="pug">
   .main-scenariors__cards
      SectionMainScenariorsCard(v-for="(item, index) in  scenariorCards" :key="index" :card="item" :index="index")
</template>

<script setup>
const scenariorCards = [
   {
      title: "Стартовое жильё",
      text: "для молодёжи и&nbsp;студентов",
   },
   {
      title: "Проживание",
      text: "Квартира для&nbsp;долгосрочного проживания",
   },
   {
      title: "Аренда",
      text: "Жильё на короткий срок для туристов и&nbsp;командировочных",
   },
];
</script>

<style lang="scss" scoped>
.main-scenariors {
   &__cards {
      display: flex;
      margin-top: 80px;
      max-width: 1115px;
      height: 628px;
      align-items: flex-start;
      margin: 0 auto;
      counter-reset: num;
      position: relative;
      margin-top: 80px;
      @media screen and (max-width: $xxxl) {
         margin-top: 64px;
         max-width: 1042px;
         height: 583px;
      }
      @media screen and (max-width: $xl) {
         margin-top: 0;
         height: auto;
         max-width: 100%;
         flex-direction: column;
         gap: 20px;
      }
      @media screen and (max-width: $md) {
         gap: 14px;
      }
   }
}
</style>
