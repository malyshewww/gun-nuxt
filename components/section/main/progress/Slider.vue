<template lang="pug">
	.main-progress__cards
		.swiper(ref="dynamicSlider")
			.swiper-wrapper
				ProgressCard(v-for="(item, index) in dynamic.data" :key="index" @openPopupDynamic="openPopupDynamic($event, item)" :card="item")
		.slider-controls
			button(ref="buttonPrev" type="button").slider-button.slider-button-prev
			button(ref="buttonNext" type="button").slider-button.slider-button-next
		PopupDynamic(:is-open.sync="storePopupDynamic.isOpenPopupDynamic" @close-popup="closePopupDynamic" :popup-data="initialState" :initial-slide="initialSlide")
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
};
const closePopupDynamic = () => {
   storePopupDynamic.closePopupDynamic();
   setTimeout(() => {
      initialState.caption = null;
      initialState.images = null;
   }, 100);
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
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
         breakpoints: {
            300: {
               slidesPerView: "auto",
               spaceBetween: 14,
            },
            767.98: {
               spaceBetween: 20,
               slidesPerView: "auto",
            },
            1400: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
         },
         on: {
            init: function (swiper) {
               const slides = swiper.slides;
               const sliderControls =
                  swiper.navigation.prevEl.parentNode ||
                  swiper.navigation.nextEl.parentNode;
               if (slides.length <= swiper.passedParams.slidesPerView) {
                  swiper.navigation.destroy();
                  sliderControls.remove();
               }
            },
         },
      });
   }
};
onMounted(() => {
   initSlider();
});
</script>

<style lang="scss" scoped>
.main-progress {
   &__cards {
      display: grid;
      grid-template-columns: 100%;
      gap: 50px 0;
      @media screen and (max-width: $xxxl) {
         gap: 40px 0;
      }
      @media screen and (max-width: $xl) {
         gap: 32px 0;
      }
      @media screen and (max-width: $md) {
         gap: 20px 0;
      }
   }
   & .swiper {
      align-self: stretch;
      width: 100%;
      @media screen and (max-width: $xxxl) {
         overflow: visible;
      }
   }
   & .item-dynamic {
      @media screen and (max-width: $xxxl) {
         max-width: 348px;
         flex-shrink: 0;
         width: 100%;
      }
      @media screen and (max-width: $xl) {
         max-width: 256px;
      }
   }
}
.slider-controls {
   @media screen and (max-width: $xl) {
      justify-content: flex-end;
   }
}
</style>
