<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.apartment-card
			.container
				.apartment-card__wrapper
					.apartment-card__body
						SectionApartmentScheme
						SectionApartmentInfo(:info="apartmentData")
					SliderGallery(:slider="slider" slider-caption="Варианты дизайнерской отделки" :isDescr="true")
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
   {
      title: "Апартаменты 31,2 м²",
      path: "/",
   },
];
const slider = [
   {
      img: "1",
      alt: "описание",
   },
   {
      img: "2",
      alt: "описание",
   },
   {
      img: "3",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
];
const apartmentData = reactive({
   area: "31,2",
   floor: "17",
   rooms: "студия",
   number: "№ 12",
   price: "4500000",
   priceArea: "450 000 ₽/м²",
   features: [
      {
         title: "Дизайнерская отделка",
      },
      {
         title: "Видовая квартира",
      },
      {
         title: "Выгодное предложение",
      },
   ],
});
</script>

<style lang="scss">
.apartment-card {
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 156px;
   }
   &__body {
      display: grid;
      grid-template-columns: 1fr 549px;
      gap: 96px;
      align-items: start;
   }
}
</style>
