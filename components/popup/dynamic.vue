<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-dynamic" :is-open="isOpen" @close-popup="closePopup")
			.popup-slider
				.popup-slider__body.swiper(ref="dynamicSlider")
					.popup-slider__wrapper.swiper-wrapper
						.popup-slider__item.swiper-slide(v-for="image, index in popupData.images" :key="index")
							.popup-slider__image.ibg
								img(:src="`/images/dynamic/dynamic-${image}@2x.jpg`")
				.slider-controls
					.slider-pagination(ref="sliderPagination")
					.slider-buttons
						button(ref="buttonPrev" type="button" class="slider-button slider-button-prev")
						button(ref="buttonNext" type="button" class="slider-button slider-button-next")
				.popup-slider__date {{popupData.caption}}
</template>

<script setup>
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { usePopupDynamicStore } from "~/stores/popup/dynamic";

const store = usePopupDynamicStore();

const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
   popupData: {
      type: Object,
      required: true,
   },
   initialSlide: {
      type: Number,
      required: true,
   },
});
const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
   // destroyDynamicSlider();
};

const dynamicSlider = ref("");
const dynamicSwiper = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");
const sliderPagination = ref("");

const addZero = (num) => {
   return num > 9 ? num : "0" + num;
};

function destroyDynamicSlider() {
   if (dynamicSwiper.value != null) {
      dynamicSwiper.value.destroy();
   }
}

const initDynamicSlider = () => {
   if (dynamicSlider.value) {
      dynamicSwiper.value = new Swiper(dynamicSlider.value, {
         modules: [Navigation, Pagination],
         speed: 1000,
         spaceBetween: 10,
         slidesPerView: 1,
         observer: true,
         observeSlideChildren: true,
         observeParents: true,
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
         pagination: {
            el: sliderPagination.value,
            type: "custom",
            renderCustom: function (swiper, current, total) {
               return `
                  <span class="slider-pagiantion-current">${addZero(
                     current
                  )}</span> 
                  <span>/</span>
                  <span class="slider-pagiantion-total">${addZero(
                     total
                  )}</span>`;
            },
         },
      });
   }
};

onMounted(() => {
   initDynamicSlider();
});

onUnmounted(() => {});
</script>

<style lang="scss">
.popup {
   &.popup-dynamic {
      & .popup__wrapper {
         padding: 0;
      }
      & .popup__content {
         width: 100%;
         max-width: 1238px;
         min-height: 868px;
         border-radius: 0;
         padding: 64px;
         background: var(--text-white);
      }
   }
}
.popup-slider {
   width: 100%;
   height: 100%;
   position: relative;
   font-family: var(--font-family);
   &__body {
      border-radius: 10px;
   }
   &__image {
      padding-bottom: math.div(740, 1110) * 100%;
   }
   &__date {
      position: absolute;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      z-index: 2;
      top: 24px;
      left: 24px;
      border-radius: 100px;
      padding: 4px 20px 4px 20px;
      min-height: 33px;
      background: var(--text-white);
      text-transform: lowercase;
      line-height: 19px;
      pointer-events: none;
   }
   & .slider-controls {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 24px;
      z-index: 2;
      display: flex;
      justify-content: space-between;
   }
   & .slider-buttons {
      display: flex;
      align-items: center;
      gap: 14px;
   }
   & .slider-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border-radius: 5px;
      padding: 4px 5px;
      height: 34px;
      background: var(--text-white);
      font-size: 14px;
      line-height: 18px;
      width: 82px;
   }
   & .slider-button {
      width: 54px;
      height: 54px;
      background: var(--text-white);
      border-color: transparent;
      &::before {
         content: "";
         width: 20px;
         height: 20px;
         mask-size: 20px 20px;
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--main-color);
      }
      &-prev {
         &::before {
            mask-image: url("/images/icons/arrow-prev.svg");
         }
      }
      &-next {
         &::before {
            mask-image: url("/images/icons/arrow-next.svg");
         }
      }
      &.swiper-button-disabled {
         opacity: 0.5;
      }
   }
}
</style>
