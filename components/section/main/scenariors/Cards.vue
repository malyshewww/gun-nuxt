<template lang="pug">
	.main-scenariors__cards-container
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
   &__cards-container {
      display: grid;
      place-items: center;
   }
   &__cards {
      display: flex;
      // max-width: 1115px;
      min-height: 628px;
      align-items: flex-start;
      margin: 0 auto;
      counter-reset: num;
   }
}
</style>
