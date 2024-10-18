<template lang="pug">
	.main-location__slider.slider-location
		.slider-location__box
			.slider-location__images
				.slider-location__image(v-for="(item, index) in slides" :class="{active: index === currentSlideIndex}")
					img(:src="`/images/main-location/slide-${index+1}.jpg`" :alt="item.caption")
			.slider-location__outer
				.slider-location__body.swiper(ref="locationSlider")
					.slider-location__wrapper.swiper-wrapper
						.slider-location__item.swiper-slide(v-for="(item, index) in slides")
							.slider-location__content
								.slider-location__caption {{item.caption}}
								.slider-location__description {{item.description}}
								.slider-location__distance {{item.distance}}
				.slider-controls
					button(ref="buttonPrev" type="button").slider-button.slider-button--prev
					button(ref="buttonNext" type="button").slider-button.slider-button--next
</template>

<script setup>
import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
   {
      caption: "парк пушкина",
      description:
         "В обновленном парке: детский городок, специальная зона для выгула и дрессировки собак, просторная скейт-площадка",
      distance: "5 минут пешком",
   },
   {
      caption: "площадь Горького",
      distance: "5 минут пешком",
   },
   {
      caption: "Средной рынок",
      description:
         "Комфортные и современные торговые ряды с фермерскими продуктами",
      distance: "5 минут пешком",
   },
   {
      caption: "Улица Белинского",
      description:
         "Многочисленные скверы и исторические уголки Нижнего Новгорода",
      distance: "5 минут пешком",
   },
];

const currentSlideIndex = ref(0);

const locationSlider = ref("");
const locationSwiper = ref(null);
const buttonPrev = ref("");
const buttonNext = ref("");

const initSlider = () => {
   if (locationSlider.value) {
      locationSwiper.value = new Swiper(locationSlider.value, {
         modules: [Navigation, EffectFade],
         slidesPerView: 1,
         speed: 1000,
         spaceBetween: 20,
         effect: "fade", // apply fade effect
         fadeEffect: {
            crossFade: true, // resolve the overlapping of the slides
         },
         navigation: {
            prevEl: buttonPrev.value,
            nextEl: buttonNext.value,
         },
         on: {
            slideChange: function (swiper) {
               const activeIndex = swiper.activeIndex;
               currentSlideIndex.value = activeIndex;
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
.slider-location {
   position: absolute;
   bottom: 0;
   right: 0;
   width: 820px;
   height: 320px;
   overflow: hidden;
   background: var(--text-midnight-70);
   &__box {
      display: flex;
      height: 100%;
   }
   &__images {
      position: relative;
      flex: 0 0 320px;
      height: 100%;
   }
   &__image {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s;
      &.active {
         opacity: 1;
      }
      & img {
         @extend .slider-location__images;
      }
   }
   &__outer {
      flex: 1 1 auto;
      padding: 40px 60px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: 20px;
   }
   &__body {
      max-width: 380px;
   }
   &__wrapper {
   }
   &__item {
      &:nth-child(2) {
         & .slider-location {
            &__caption {
               max-width: 200px;
            }
         }
      }
      &:nth-child(3) {
         & .slider-location {
            &__description {
               max-width: 360px;
            }
         }
      }
   }
   &__content {
      display: grid;
      justify-items: end;
      gap: 12px;
      text-align: right;
      color: var(--text-white);
   }
   &__caption {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
   }
   &__description {
      line-height: 19px;
      font-family: var(--font-family);
   }
   &__distance {
      font-weight: 600;
      line-height: 22px;
      text-align: center;
      display: grid;
      place-items: center;
      margin-top: 8px;
      border-radius: 100px;
      padding: 5px 16px;
      background: var(--bg-midnight-50);
      font-family: var(--font-family);
   }
}

.slider-controls {
   gap: 28px;
   display: inline-flex;
}
.slider-button {
   width: 24px;
   height: 24px;
   border-radius: 0;
   border: 0;
   &::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      mask-repeat: no-repeat;
      mask-position: center;
      background-color: var(--bg-white);
   }
   &--prev {
      &::before {
         mask-image: url("/images/icons/arrow-prev.svg");
      }
   }
   &--next {
      &::before {
         mask-image: url("/images/icons/arrow-next.svg");
      }
   }
}
</style>
