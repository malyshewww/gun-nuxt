<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.flats.flats-list
			.container
				FlatHeading
				FlatFilter
				.flats__wrapper
					.flats__body
						FlatCard(
                     v-for="(item, index) in apartments" 
                     :key="index" :flat="item" 
                     :flat-index="index"
                     :active-card="activeCard"
                     @toggle-dropdown="toggleDropdown")
					.flats__bottom
						UiButton(text="показать ещё" class-names="btn-transparent")
</template>

<script setup>
useHead({
   bodyAttrs: {
      class: "page--flats-list",
   },
});
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
const apartments = reactive([
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
   // {
   //    images: ["1", "2"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка"],
   // },
   // {
   //    images: ["1", "2", "4"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: [
   //       "Дизайнерская отделка",
   //       "Видовая квартира",
   //       "Выгодное предложение",
   //    ],
   // },
   // {
   //    images: ["1", "2", "3"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка", "Видовая квартира"],
   // },
   // {
   //    images: ["1", "2"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка"],
   // },
   // {
   //    images: ["1", "2", "4"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: [
   //       "Дизайнерская отделка",
   //       "Видовая квартира",
   //       "Выгодное предложение",
   //    ],
   // },
   // {
   //    images: ["1", "2", "3"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка", "Видовая квартира"],
   // },
   // {
   //    images: ["1", "2"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка"],
   // },
   // {
   //    images: ["1", "2", "4"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: [
   //       "Дизайнерская отделка",
   //       "Видовая квартира",
   //       "Выгодное предложение",
   //    ],
   // },
   // {
   //    images: ["1", "2", "3"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка", "Видовая квартира"],
   // },
   // {
   //    images: ["1", "2"],
   //    area: " 31,2",
   //    price: 4500000,
   //    features: ["№ 12", "17 этаж из 20", "450 000 ₽/м2"],
   //    parameters: ["Дизайнерская отделка"],
   // },
]);

const activeCard = ref(-1);

const toggleDropdown = (index) => {
   // Если открыта та же карточка, закрываем ее
   if (activeCard.value === index) {
      activeCard.value = -1;
   } else {
      // Открываем новую карточку и закрываем остальные
      activeCard.value = index;
   }
};
const closeAllDropdowns = (e) => {
   const target = e.target;
   if (!target.closest(".parameters-card__wrapper")) {
      activeCard.value = -1;
   }
};
onUnmounted(() => {
   document.removeEventListener("click", closeAllDropdowns);
});
onMounted(() => {
   document.addEventListener("click", closeAllDropdowns);
});
</script>

<style lang="scss" scoped>
.flats-list .heading-main {
   @media screen and (max-width: $md) {
      gap: 48px 20px;
   }
}
.flats {
   overflow: clip;
   &__wrapper {
      display: grid;
      align-items: start;
      gap: 64px;
      margin-top: 64px;
      @media screen and (max-width: $xl) {
         gap: 32px;
         margin-top: 40px;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
      @media screen and (max-width: $xxxl) {
         grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: repeat(2, 1fr);
         gap: 20px;
      }
      @media screen and (max-width: $md) {
         grid-template-columns: 100%;
      }
   }
   &__bottom {
      justify-self: center;
      @media screen and (max-width: $xl) {
         justify-self: stretch;
      }
   }
}
</style>
