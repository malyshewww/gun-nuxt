<template lang="pug">
	.main-progress__cards
		.swiper(ref="dynamicSlider")
			.swiper-wrapper
				ProgressCard(v-for="(item, index) in dynamic.data" :key="index" @openPopupDynamic="openPopupDynamic($event, item)" :card="item")
		PopupDynamic(v-if="storePopupDynamic.isOpenPopupDynamic" :is-open.sync="storePopupDynamic.isOpenPopupDynamic" @close-popup="closePopupDynamic" :popup-data="initialState" :initial-slide="initialSlide")
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { usePopupDynamicStore } from "~/stores/popup/dynamic";

const initialSlide = ref(0);

const storePopupDynamic = usePopupDynamicStore();

const initialState = reactive({
   caption: "",
   images: [],
});

const openPopupDynamic = (event, item) => {
   initialState.caption = item.caption;
   initialState.images = item.images;
   storePopupDynamic.openPopupDynamic();
   console.log(storePopupDynamic.isOpenPopupDynamic);
};
const closePopupDynamic = () => {
   storePopupDynamic.closePopupDynamic();
   setTimeout(() => {
      initialState.caption = null;
      initialState.images = null;
   }, 100);
   console.log(storePopupDynamic.isOpenPopupDynamic);
};

const dynamic = reactive({
   data: [
      {
         img: "1",
         caption: "Август 2024",
         images: ["1", "2", "3"],
      },
      {
         img: "2",
         caption: "Сентябрь 2024",
         images: ["2", "3", "1"],
      },
      {
         img: "3",
         caption: "Октябрь 2024",
         images: ["3", "1", "3"],
      },
      {
         img: "4",
         caption: "Ноябрь 2024",
         images: ["1", "2", "3", "4"],
      },
   ],
});

const dynamicSlider = ref("");
const dynamicSwiper = ref("");
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   if (dynamicSlider.value) {
      dynamicSwiper.value = new Swiper(dynamicSlider.value, {
         modules: [Navigation],
         slideClass: "item-dynamic",
         speed: 1000,
         spaceBetween: 40,
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
         breakpoints: {
            300: {
               slidesPerView: 2,
            },
            767.98: {
               slidesPerView: 4,
            },
         },
      });
   }
};
onMounted(() => {
   initSlider();
});
</script>
