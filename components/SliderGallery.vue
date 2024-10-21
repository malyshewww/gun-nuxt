<template lang="pug">
	section.gallery-slider
		.heading
			.heading__content
				h2.heading__title {{sliderCaption}}
				p.heading__description(v-if="isDescr") Дизайнеры ЖК «Пушка» продумали все для вашего комфорта — современная и эстетичная отделка «под ключ» позволит значительно сэкономить на ремонте
			.slider-controls
				button(ref="buttonPrev" type="button").slider-button.slider-button-prev
					//- svg.icon
					//- 	use(xlink:href="/images/icons/sprite.svg#prev-arrow")
				button(ref="buttonNext" type="button").slider-button.slider-button-next
					//- svg.icon
					//- 	use(:xlink:href="`/images/icons/sprite.svg#next-arrow`")
		.gallery-slider__body.swiper(ref="sliderGallery")
			.gallery-slider__wrapper.swiper-wrapper 
				.gallery-item.swiper-slide(v-for="slide, index in slider")
					span.mask
						span.mask__icon
					a(:href="`/images/text-page/${slide.img}@2x.jpg`" data-fancybox="gallery")
						img(:src="`/images/text-page/${slide.img}@2x.jpg`", alt="")
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/navigation";

defineProps({
   isDescr: {
      type: Boolean,
      required: true,
   },
   sliderCaption: {
      type: String,
      required: false,
   },
   slider: {
      type: Object,
      required: true,
   },
});

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
.icon {
   width: 28px;
   height: 28px;
   display: grid;
   place-items: center;
   transition: fill $time;
}
</style>
