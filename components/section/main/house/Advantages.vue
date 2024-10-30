<template lang="pug">
	.house-format__advantages
		SectionMainHouseAdvantagesItem(v-for="(item, index) in advantages" :key="index" :item="item")
</template>

<script setup>
const advantages = [
   {
      title: "Функциональная планировка",
      text: "Продуманное зонирование жилого пространства",
   },
   {
      title: "Качественная отделка",
      text: "Высококачественные настенные и&nbsp;напольные покрытия в студиях",
   },
   {
      title: "Продуманная инженерия",
      text: "Сантехника и электрофурнитура высокого класса",
   },
];
</script>

<style lang="scss" scoped>
.house-format {
   &__advantages {
      position: relative;
      z-index: 2;
      max-width: 390px;
      display: grid;
      align-items: start;
      grid-template-columns: 100%;
      gap: 52px;
      @media screen and (max-width: $xxxl) {
         gap: 32px;
      }
      @media screen and (max-width: $xl) {
         max-width: 100%;
         grid-template-columns: repeat(3, 1fr);
         gap: 14px;
      }
      @media screen and (max-width: $md) {
         grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
         gap: 24px;
      }
   }
}
</style>
