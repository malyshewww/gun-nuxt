<template lang="pug">
	section.gallery-slider
		.heading
			.heading__content
				h2.heading__title Слайдер-галерея
			.slider-controls
				button(ref="buttonPrev" type="button").slider-button.slider-button-prev
					svg.icon
						use(xlink:href="/images/icons/sprite.svg#prev-arrow")
				button(ref="buttonNext" type="button").slider-button.slider-button-next
					svg.icon
						use(:xlink:href="`/images/icons/sprite.svg#next-arrow`")
		.gallery-slider__body.swiper(ref="sliderGallery")
			.gallery-slider__wrapper.swiper-wrapper 
				.gallery-item.swiper-slide(v-for="slide, index in 5")
					span.mask
						span.mask__icon
					a(:href="`/images/text-page/${slide}@2x.jpg`" data-fancybox="gallery")
						img(:src="`/images/text-page/${slide}@2x.jpg`", alt="")
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";

const sliderGallery = ref("");
const swiperGallery = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   if (sliderGallery.value) {
      swiperGallery.value = new Swiper(sliderGallery.value, {
         modules: [Navigation],
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

const fancyboxOptions = {
   Hash: false,
};

onMounted(() => {
   Fancybox.bind(`[data-fancybox="gallery"]`, fancyboxOptions);
   initSlider();
});
</script>

<style lang="scss">
.slider-controls {
   display: flex;
   align-items: center;
   gap: 16px;
}
.slider-button {
   flex-shrink: 0;
   width: 64px;
   height: 64px;
   border-radius: 50%;
   border: 2px solid var(--bg-gray);
   display: grid;
   place-items: center;
   transition: border-color $time;
   @media (any-hover: hover) {
      &:hover {
         border-color: var(--text-midnight-100);
      }
   }
   &.disabled,
   &.swiper-button-disabled,
   &:disabled {
      cursor: default;
      pointer-events: none;
      border-color: var(--bg-gray);
      & .icon {
         fill: var(--text-gray);
      }
   }
}
.icon {
   width: 28px;
   height: 28px;
   display: grid;
   place-items: center;
   transition: fill $time;
}
</style>
