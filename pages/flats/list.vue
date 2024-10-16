<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.flats.flats-list
			.container
				FlatHeading
				FlatFilter
				.flats__wrapper
					.flats__body
						FlatCard(v-for="(item, index) in apartments" :key="index" :flat="item")
					.flats__bottom
						UiButton(text="показать ещё" class-names="btn-transparent")
</template>

<script setup>
const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Апартаменты в продаже",
      path: "/",
   },
];
const apartments = [
   {
      images: ["1", "2", "4"],
      area: " 31,2",
      price: 4500000,
      features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
      parameters: [
         "Дизайнерская отделка",
         "Видовая квартира",
         "Выгодное предложение",
      ],
   },
   {
      images: ["1", "2", "3"],
      area: " 31,2",
      price: 4500000,
      features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
      parameters: ["Дизайнерская отделка", "Видовая квартира"],
   },
   {
      images: ["1", "2"],
      area: " 31,2",
      price: 4500000,
      features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
      parameters: ["Дизайнерская отделка"],
   },
];
</script>

<style lang="scss" scoped>
.flats {
   &__wrapper {
      display: grid;
      align-items: start;
      gap: 64px;
      margin-top: 64px;
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: start;
      gap: 40px;
   }
   &__bottom {
      justify-self: center;
   }
}
</style>
