<template lang="pug">
	.flat-card
		.flat-card__body
			.flat-card__slider
				nuxt-link(to="/apartments/1").flat-slider__images
					.image-switch
						.image-switch__item(v-for="(image, idx) in flat.images" :key="idx" @mouseenter="switchImages(idx)" @mouseleave="initialState" :class="{active: currentImage === idx}")
							.image-switch__picture
								img(:src="`/images/flat-card/flat-${idx+1}.png`" alt="alt")
				.flat-slider__pagination.image-pagination
					ul.image-pagination__list
						li.image-pagination__item(v-for="(image, idx) in flat.images" :key="idx" :class="{active: currentImage === idx}" @click="switchImages(idx)")
			.flat-card__main
				.flat-card__area Апартаменты {{flat.area}} м#[sup 2]
				.flat-card__price {{formatNumber(flat.price)}}
				.flat-card__features.features-card
					ul.features-card__list
						li.features-card__item(v-for="(feature, idx) in flat.features" :key="idx") {{feature}}
			.flat-card__parameters.parameters-card(v-if="flat.parameters")
				.parameters-card__item {{flat.parameters[0]}}
				.parameters-card__wrapper
					.parameters-card__button(v-if="parametersLength") +{{parametersLength}}
					.parameters-card__tooltip(v-if="parametersLength")
						ul.parameters-card__list
							li.parameters-card__item(v-for="(parameter, idx) in newParametersList" :key="idx") {{parameter}}
</template>

<script setup>
const props = defineProps({
   flat: {
      type: Object,
      required: true,
   },
});

const currentImage = ref(0);

const parametersLength = computed(() => {
   return props.flat.parameters.length - 1;
});
const newParametersList = computed(() => {
   return props.flat.parameters.filter((item, index) => index !== 0);
});

const switchImages = (key) => {
   currentImage.value = key;
   console.log("click");
};

const initialState = () => {
   currentImage.value = 0;
};
</script>

<style lang="scss" scoped>
.flat-card {
   padding: 24px;
   background-color: var(--bg-white);
   &__body {
      display: grid;
      align-items: start;
      gap: 25px;
   }
   &__slider {
      display: flex;
      flex-direction: column;
      gap: 6px;
   }
   &__main {
      display: grid;
      grid-template-columns: 100%;
      align-items: start;
      gap: 8px;
   }
   &__area {
      font-weight: 600;
      line-height: 22px;
      font-size: 16px;
      color: var(--text-gray);
   }
   &__price {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      font-family: var(--second-family);
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
.features-card {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
   }
   &__item {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      &:not(:last-child) {
         &::after {
            content: "";
            display: block;
            font-size: 14px;
            line-height: 18px;
            width: 1px;
            height: 10px;
            background-color: var(--text-gray);
            transform: skewX(-20deg);
            color: var(--text-gray);
         }
      }
   }
}
.parameters-card {
   display: inline-flex;
   align-items: center;
   gap: 6px;
   flex-wrap: wrap;
   &__first {
   }
   &__wrapper {
      position: relative;
      cursor: pointer;
      @media (any-hover: hover) {
         &:hover {
            & .parameters-card__tooltip {
               top: 0;
               opacity: 1;
               pointer-events: all;
            }
         }
      }
   }
   &__button {
      @extend .parameters-card__item;
   }
   &__tooltip {
      position: absolute;
      left: 50%;
      top: 20px;
      transform: translate(-53%, calc(-100% - 12px));
      border-radius: 3px;
      padding: 14px 20px;
      box-shadow: 0 0 5px 0 rgba(43, 47, 59, 0.1);
      background-color: var(--bg-white);
      border-radius: 3px;
      padding: 14px 20px;
      width: 228px;
      opacity: 0;
      pointer-events: none;
      transition: top $time ease 0s, opacity $time ease 0s;
      &::before {
         content: "";
         display: block;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         top: 100%;
         width: 0px;
         height: 0px;
         border-style: solid;
         border-width: 8px 8px 0 8px;
         border-color: var(--bg-white) transparent transparent transparent;
         transform: rotate(0deg);
      }
      & .parameters-card__item {
         min-height: 28px;
         justify-items: start;
         align-items: center;
         padding: 3px 14px;
         font-size: 13px;
      }
   }
   &__list {
      @include reset-list;
      display: grid;
      gap: 6px;
   }
   &__item {
      background-color: var(--bg-white-dirt);
      min-height: 34px;
      display: grid;
      place-items: center;
      border-radius: 100px;
      padding: 7px 20px;
      font-size: 14px;
      line-height: 18px;
   }
}
</style>
