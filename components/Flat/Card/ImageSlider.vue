<template lang="pug">
	.flat-card__slider
		nuxt-link(ref="imageSlider" to="/apartments/1").flat-slider__images
			.image-switch
				.image-switch__item(v-for="(image, idx) in images" :key="idx" @mouseenter="switchImages(idx)" @mouseleave="initialState" :class="{active: currentImage === idx}")
					.image-switch__picture
						img(:src="`/images/flat-card/flat-${idx+1}.png`" alt="alt")
		.flat-slider__pagination.image-pagination(ref="imagePgination")
			ul.image-pagination__list
				li.image-pagination__item(v-for="(image, idx) in images" :key="idx" :class="{active: currentImage === idx}" @click="switchImages(idx)")
</template>

<script setup>
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

defineProps({
   images: {
      type: Object,
      required: true,
      default: () => {},
   },
});

const currentImage = ref(0);
const switchImages = (key) => {
   currentImage.value = key;
};
const initialState = () => {
   currentImage.value = 0;
};

const imageSlider = ref("");
const imageSwiper = ref(null);
const imagePagination = ref("");

onMounted(() => {
   //    const sliders = document.querySelectorAll(".flat-card__slider");
   //    let swiperImage = null;
   //    [...sliders].forEach((slider) => {
   //       console.log(slider);
   //       const outer = slider.querySelector(".flat-slider__images");
   //       swiperImage = new Swiper(outer, {
   //          modules: [Pagination],
   //           wrapperClass: slider.querySelector(".image-switch"),
   //          slideClass: slider.querySelector(".image-switch__item"),
   //          spaceBetween: 10,
   //          slidesPerView: 1,
   //          speed: 800,
   //          pagination: {
   //             el: slider.parentNode.querySelector(".image-pagination"),
   //             type: "bullets",
   //             clickable: true,
   //          },
   //       });
   //    });
   //    function initializeSwiper() {
   //       imageSwiper.value = new Swiper(imageSlider.value, {
   //          modules: [Pagination],
   //          wrapperClass: "image-switch",
   //          slidesClass: "image-switch__item",
   //          spaceBetween: 10,
   //          slidesPerView: 1,
   //          speed: 800,
   //          centeredSlides: true,
   //          pagination: {
   //             el: imagePagination.value,
   //             type: "bullets",
   //             clickable: true,
   //             // dynamicBullets: true,
   //          },
   //       });
   //    }
   //    function destroySwiper() {
   //       if (imageSwiper.value) {
   //          imageSwiper.value.destroy();
   //          imageSwiper.value = null;
   //       }
   //    }
   //    function checkScreenWidth() {
   //       if (window.matchMedia("(max-width: 767.98px)").matches) {
   //          initializeSwiper();
   //       } else {
   //          destroySwiper();
   //       }
   //    }
   //    checkScreenWidth();
   //    window.addEventListener("resize", checkScreenWidth);
});
</script>

<style lang="scss" scoped>
.flat-card {
   &__slider {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      @media screen and (max-width: $md) {
         gap: 12px;
      }
   }
}
.flat-slider {
   &__images {
      display: block;
      overflow: hidden;
      position: relative;
      height: 232px;
   }
}
.image-switch {
   position: absolute;
   display: flex;
   height: 100%;
   width: 100%;
   left: 0;
   top: 0;
   z-index: 5;
   &__item {
      flex-grow: 1;
      &.active {
         & .image-switch__picture {
            opacity: 1;
            z-index: 1;
         }
      }
      &:first-child .image-switch__picture {
         opacity: 1;
         z-index: -1;
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            & .image-switch__picture {
               opacity: 1;
               z-index: -1;
            }
         }
      }
   }
   &__picture {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: var(--bg-white);
      justify-content: center;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      top: 0;
      transform: translateX(-50%);
      z-index: var(--bg-midnight-100);
   }
}
.image-pagination {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6px;
   }
   &__item {
      background-color: var(--bg-white-dirt);
      width: 20px;
      height: 2px;
      flex-shrink: 0;
      transition: background-color $time;
      &.active {
         background-color: var(--text-gray);
      }
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
         }
      }
   }
}
</style>
