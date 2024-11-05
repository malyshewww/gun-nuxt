<template lang="pug">
	nuxt-link(to="/apartments/1").flat-card__slider
		div(ref="imageSlider").flat-slider__images
			.image-switch
				.image-switch__item(v-for="(image, idx) in images" :key="idx" @mouseenter="switchImages(idx)" @mouseleave="initialState" :class="{active: currentImage === idx}")
					.image-switch__picture
						img(:src="`/images/flat-card/flat-${idx+1}.png`" alt="alt")
		.flat-slider__pagination.image-pagination
			ul.image-pagination__list
				li.image-pagination__item(v-for="(image, idx) in images" :key="idx" :class="{active: currentImage === idx}" @click="switchImages(idx)")
		.swiper-pagination(ref="imagePagination")
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
const imageSwiper = ref("");
const imagePagination = ref("");

onMounted(() => {
   function initializeSwiper() {
      imageSwiper.value = new Swiper(imageSlider.value, {
         modules: [Pagination],
         wrapperClass: "image-switch",
         slideClass: "image-switch__item",
         spaceBetween: 10,
         slidesPerView: 1,
         speed: 800,
         centeredSlides: true,
         observer: true,
         observeSlideChildren: true,
         pagination: {
            el: imagePagination.value,
            clickable: true,
            // type: "bullets",
            // bulletElement: "li",
            // bulletActiveClass: "active",
            // bulletClass: "image-pagination__item",
            // renderBullet: function (index, className) {
            //    return '<span class="' + className + '">' + "</span>";
            // },
            // dynamicBullets: true,
         },
      });
   }
   function destroySwiper() {
      if (imageSwiper.value) {
         imageSwiper.value.destroy();
         imageSwiper.value = null;
      }
   }
   function checkScreenWidth() {
      if (window.matchMedia("(max-width: 767.98px)").matches) {
         initializeSwiper();
      } else {
         destroySwiper();
      }
   }
   checkScreenWidth();
   window.addEventListener("resize", checkScreenWidth);
});

onUnmounted(() => {
   imageSwiper.value = null;
});
</script>

<style lang="scss">
.flat-card {
   &__slider {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 100%;
      @media screen and (max-width: $md) {
         gap: 12px;
         align-items: center;
      }
   }
}
.flat-slider {
   &__images {
      display: block;
      overflow: hidden;
      position: relative;
      height: 232px;
      @media screen and (max-width: $md) {
         width: 228px;
      }
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
   @media screen and (max-width: $md) {
      position: static;
   }
   &__item {
      flex-grow: 1;
      @media screen and (max-width: $md) {
         flex-grow: 0;
         flex-shrink: 0;
         width: 100%;
      }
      @media screen and (min-width: $md) {
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
      @media screen and (max-width: $md) {
         opacity: 1;
         position: static;
         transform: none;
         pointer-events: all;
      }
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
   @media screen and (max-width: $md) {
      display: none;
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
      @media screen and (max-width: $md) {
         width: 20px;
         height: 2px;
         flex-shrink: 0;
      }
   }
}
.swiper-pagination {
   position: static;
   justify-content: center;
   display: none;
   @media screen and (max-width: $md) {
      display: flex;
   }
   & .swiper-pagination-bullet {
      width: 20px;
      height: 2px;
      flex-shrink: 0;
      border-radius: 0;
      background: var(--bg-white-dirt);
      opacity: 1;
      &-active {
         background: var(--text-gray);
      }
   }
   & .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
   .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      width: 20px;
      height: 2px;
      flex-shrink: 0;
   }
}
</style>
