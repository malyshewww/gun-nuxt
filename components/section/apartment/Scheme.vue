<template lang="pug">
	.apartment-card__scheme.scheme-apartment
		.scheme-apartment__switch.switch-scheme
			.switch-scheme__buttons(ref="switchParent" @click="switchButtons")
				button(type="button" data-id="1").switch-scheme__button.active Планировка
				button(type="button" data-id="2").switch-scheme__button План этажа
				.switch-scheme__bg#pill(ref="pill")
		.scheme-apartment__body
			.scheme-apartment__schemes
				.scheme-apartment__preview(:class="{active: isSelected == 1}")
					a(:href="`/images/apartments/apartment-1.png`" data-fancybox="gallery-1").scheme-apartment__image
						img(:src="`/images/apartments/apartment-1.png`" alt="Планировка")
				.scheme-apartment__preview(:class="{active: isSelected == 2}")
					a(:href="`/images/apartments/apartment-1.png`" data-fancybox="gallery-2").scheme-apartment__image
						img(:src="`/images/apartments/apartment-1.png`" alt="План этажа")
				span.mask
					.mask__icon
			.scheme-apartment__decor.scheme-apartment__decor--compass 
				img(:src="`/images/icons/compas.svg`" alt="Компас")
			.scheme-apartment__decor
				img(:src="`/images/icons/triangle-decor.svg`" alt="Схема")
</template>

<script setup>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const isSelected = ref(1);
const pill = ref("");
const switchParent = ref("");

const switchButtons = (e) => {
   const target = e.target;
   if (target.closest(".switch-scheme__button")) {
      const id = target.dataset.id;
      isSelected.value = id;
      const dimensions = target.getBoundingClientRect();
      pill.value.style.width = `${dimensions.width}px`;
      pill.value.style.height = `${dimensions.height}px`;
      pill.value.style.left = `${
         dimensions.left - switchParent.value.getBoundingClientRect().left
      }px`;
   }
};
onMounted(() => {
   Fancybox.bind(`[data-fancybox*="gallery"]`, { Hash: false });
   const switchButtons = document.querySelectorAll(".switch-scheme__button");
   if (switchButtons) {
      switchButtons[0].click();
   }
});
</script>

<style lang="scss">
.scheme-apartment {
   border-radius: 10px;
   padding: 10px;
   background: var(--bg-white);
   padding: 40px 40px 64px;
   display: grid;
   gap: 57px;
   justify-items: center;
   &__switch {
   }
   &__body {
      padding: 0 210px;
      width: 100%;
      position: relative;
   }
   &__schemes {
      min-height: 611px;
      position: relative;
      @media (any-hover: hover) {
         &:hover {
            & .mask {
               opacity: 1;
               &__icon {
                  opacity: 1;
               }
            }
         }
      }
      & .mask {
         background-color: transparent;
      }
   }
   &__preview {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity $time * 1.5 ease 0s, visibility $time * 1.5 ease 0s;
      &.active {
         opacity: 1;
         visibility: visible;
      }
   }
   &__image {
      height: 100%;
      display: block;
      width: 100%;
      & img {
         height: 100%;
         width: 100%;
      }
   }
   &__decor {
      position: absolute;
      bottom: 0;
      width: 134px;
      height: 110px;
      display: grid;
      place-items: center;
      right: 26px;
      &--compass {
         right: auto;
         left: 0;
         width: 110px;
      }
   }
}
.switch-scheme {
   border-radius: 40px;
   padding: 6px;
   height: 46px;
   background: var(--bg-white-dirt);
   &__buttons {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 6px;
   }
   &__button {
      border-radius: 40px;
      padding: 8px 16px;
      height: 34px;
      font-size: 14px;
      line-height: 18px;
      color: var(--text-midnight-100);
      position: relative;
      z-index: 2;
   }
   &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      box-shadow: 0 0 5px 0 rgba(43, 47, 59, 0.1);
      background: var(--bg-white);
      border-radius: 40px;
      transition: left $time * 1.5 ease-in-out 0s,
         width $time * 1.5 ease-in-out 0s, height $time * 1.5 ease-in-out 0s;
   }
}
</style>
