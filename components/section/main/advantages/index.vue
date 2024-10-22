<template lang="pug">
	section.main-advantages
		.container
			.main-advantages__body
				aside.main-advantages__aside
					.section-top
						SectionHeading(title="Преимущества")
						.section-top__content
							h2.section-top__title.custom-title
								| Всё #[span.text-transparent-current важное —] Есть
					.main-advantages__decor
						img(:src="`/images/main-advantages/decor.png`" alt="декор")
				ul.main-advantages__list
					SectionMainAdvantagesCard(v-for="(card, index) in advantages" :key="index" :idx="index" :card="card")
</template>

<script setup>
const advantages = [
   {
      title: "Многоуровневый паркинг с лифтом",
      text: [
         "На нижних этажах здания расположен многоуровневый подземный паркинг, попасть в который можно на лифте из жилой части дома.",
         "На парковке предусмотрены места для велосипедов и самокатов.",
      ],
   },
   {
      title: "Холл с дизайнерским ремонтом",
      text: [
         "В холле будет выполнен дизайнерский ремонт с учетом современных тенденцийжно на лифте из жилой части дома.",
      ],
   },
   {
      title: "Апартаменты с&nbsp;отделкой под ключ",
      text: ["Жилые помещения в комплексе сдаются с отделкой «под ключ»."],
   },
   {
      title: "Сервисы первого этажа",
      text: [
         "Ресепшен",
         "Зона ожидания для курьеров",
         "Зана хранения багажа для гостей города",
      ],
   },
   {
      title: "Общественные пространства",
      text: [
         "Launge пространство, которое можно использовать для работы или чтения книг",
      ],
   },
   {
      title: "Дополнительный комфорт",
      text: [
         "Территория первого этажа с покрытием WI-FI.",
         "Отдельный санузел",
      ],
   },
];
</script>

<style lang="scss" scoped>
.main-advantages {
   padding: 110px 0;
   &__body {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      align-items: start;
   }
   &__aside {
      max-width: 688px;
      display: flex;
      flex-direction: column;
      gap: 305px;
      position: sticky;
      top: 20px;
   }
   &__list {
      @include reset-list;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      align-items: start;
   }
}
</style>
