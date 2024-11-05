<template lang="pug">
	.apartment-card__scheme.scheme-apartment(ref="schemeApartment")
		SectionApartmentSwitchButtons(@switch-buttons="switchButtons")
		.scheme-apartment__body
			.scheme-apartment__schemes
				.scheme-apartment__preview(:class="{active: isSelected == 1}")
					a(:href="`/images/apartments/apartment-1.png`" data-fancybox="gallery-1").scheme-apartment__image
						img(:src="`/images/apartments/apartment-1.png`" alt="Планировка")
				.scheme-apartment__preview(:class="{active: isSelected == 2}")
					a(:href="`/images/apartments/apartment-2.jpg`" data-fancybox="gallery-2").scheme-apartment__image
						img(:src="`/images/apartments/apartment-2.jpg`" alt="План этажа")
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
const schemeApartment = ref("");

const switchButtons = (e) => {
   const target = e.target;
   const pill = schemeApartment.value.querySelector("#pill");
   const switchParent = schemeApartment.value.querySelector(
      ".switch-scheme__buttons"
   );
   if (target.closest(".switch-scheme__button")) {
      const id = target.dataset.id;
      isSelected.value = id;
      const dimensions = target.getBoundingClientRect();
      pill.style.width = `${dimensions.width}px`;
      pill.style.height = `${dimensions.height}px`;
      pill.style.left = `${
         dimensions.left - switchParent.getBoundingClientRect().left
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

<style lang="scss" scoped>
.scheme-apartment {
   border-radius: 10px;
   padding: 10px;
   background: var(--bg-white);
   padding: 40px 40px 64px;
   display: grid;
   gap: 57px;
   justify-items: center;
   @media screen and (max-width: 1600px) {
      padding: 20px 20px 44px;
   }
   @media screen and (max-width: $xl) {
      gap: 30px;
   }
   &__body {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
   }
   &__schemes {
      min-height: 611px;
      width: 600px;
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
      @media screen and (max-width: $xxxl) {
         width: 100%;
         min-height: 500px;
      }
      @media screen and (max-width: $xl) {
         min-height: 350px;
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
         object-fit: contain;
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
         @media screen and (max-width: 1600px) {
            width: 70px;
         }
      }
      @media screen and (max-width: 1600px) {
         right: 10px;
         width: 70px;
         height: 70px;
      }
      @media screen and (max-width: $xxxl) {
         display: none;
      }
   }
}
</style>
