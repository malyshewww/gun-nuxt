<template lang="pug">
	.house-format__slider.slider-format
		.slider-format__body.swiper(ref="sliderFormat")
			.slider-format__wrapper.swiper-wrapper
				.slider-format__item.swiper-slide(v-for="(slide, index) in 6" :key="index")
					.slider-format__image.ibg
						img(:src="`/images/house-format/house-${index+1}.jpg`" alt="house")
		.slider-controls
			button(ref="buttonPrev" type="button").slider-button.slider-button-prev
			button(ref="buttonNext" type="button").slider-button.slider-button-next
</template>

<script setup>
import gsap from "gsap";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sliderFormat = ref("");
const swiperFormat = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   function updateSlideClasses({ el, slides, activeIndex }) {
      // Убираем класс у элемента слайдера на два предыдущих слайда
      const prevPrevIndex = activeIndex - 2;
      const prevPrevSlide = slides[prevPrevIndex];
      const prevPrevSlides = el.querySelectorAll(".swiper-slide-prev-prev");
      prevPrevSlides.forEach((slide) => {
         slide.classList.remove("swiper-slide-prev-prev");
      });
      if (prevPrevSlide) {
         prevPrevSlide.classList.add("swiper-slide-prev-prev");
      }
      // Убираем класс у элемента слайдера на два следующих слайда
      const nextNextIndex = activeIndex + 2;
      // const nextTripleIndex = activeIndex + 3;
      const nextNextSlide = slides[nextNextIndex];
      // const nextTripleSlide = slides[nextTripleIndex];
      const nextNextSlides = el.querySelectorAll(".swiper-slide-next-next");
      // const nextTripleSlides = el.querySelectorAll(
      //    ".swiper-slide-next-next-next"
      // );
      nextNextSlides.forEach((slide) => {
         slide.classList.remove("swiper-slide-next-next");
      });
      // nextTripleSlides.forEach((slide) => {
      //    slide.classList.remove("swiper-slide-next-next-next");
      // });

      if (nextNextSlide) {
         nextNextSlide.classList.add("swiper-slide-next-next");
      }
      // if (nextTripleSlide) {
      //    nextNextSlide.classList.add("swiper-slide-next-next-next");
      // }
   }
   if (sliderFormat.value) {
      swiperFormat.value = new Swiper(sliderFormat.value, {
         modules: [Navigation],
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         slidesPerView: "auto",
         spaceBetween: 40,
         speed: 800,
         loop: true,
         loopedSlidesLimit: false,
         loopedSlides: 2,
         loopPreventsSlide: false,
         // watchOverflow: true,
         // loopAdditionalSlides: 4,
         preloadImages: false,
         navigation: {
            nextEl: buttonNext.value,
            prevEl: buttonPrev.value,
         },
         on: {
            init: function () {
               updateSlideClasses(this);
            },
            slideChange: function () {
               updateSlideClasses(this);
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
.slider-format {
   position: relative;
   width: 100%;
   flex: 1 1 auto;
   align-self: flex-start;
   &__body {
      overflow: visible;
      position: relative;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         height: 100%;
         width: 100vw;
         left: 0;
         background-color: var(--text-white);
         z-index: 2;
         transform: translate(-100%, 0px);
      }
   }
   &__wrapper {
   }
   &__item {
      max-width: 640px;
      position: relative;
      overflow: hidden;
      height: 770px;
      transition: width 0.5s, max-width 0.5s;
      // width: auto !important;
      &.swiper-slide-active .slider-format__image {
         height: 100%;
         transform: scale(1);
      }
      &.swiper-slide-prev {
         & .slider-format__image {
            transform: scale(1);
            height: 61%;
         }
      }
      &.swiper-slide-next,
      &.swiper-slide-next-next {
         max-width: 390px;
         & .slider-format__image {
            transform: scale(1);
            height: 61%;
         }
      }
      // &:nth-child(3),
      // &:nth-child(4),
      // &:nth-child(5),
      // &:nth-child(6) {
      //    max-width: 390px;
      //    & .slider-format__image {
      //       transform: scale(1);
      //       height: 61%;
      //    }
      //    &.swiper-slide-active {
      //       max-width: 640px;
      //       & .slider-format__image {
      //          transform: scale(1);
      //          height: 100%;
      //       }
      //    }
      // }
   }
   &__image {
      transition: height 0.8s ease 0s, transform 0.8s ease 0s;
      width: 100%;
      overflow: hidden;
      & img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
      }
      @media screen and (min-width: $md) {
         height: 100%;
         // height: 61%;
         transform-origin: 0 0;
         transform: scale(0.61);
      }
   }
   & .slider-controls {
      position: absolute;
      z-index: 2;
      right: 26%;
      bottom: 0;
   }
   & .slider-button {
      width: 80px;
      height: 80px;
   }
}
</style>
