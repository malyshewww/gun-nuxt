<template lang="pug">
	.flats-filter(:class="{active: store.isOpenFilter}")
		.flats-filter__top
			button(type="button" @click="closeFilter").flats-filter__close
			.flats-filter__title Фильтры
		.flats-filter__body
			.filter-group
				.filter-group__caption Стоимость (₽)
				.filter-group__wrapper
					.filter-group__values
						.filter-group__value #[span от] {{filter.price.min}} млн
						.filter-group__value #[span до] {{filter.price.max}} млн
					.filter-group__slider-wrap
						.filter-group__slider(ref="sliderPrice")
			.filter-group
				.filter-group__caption Площадь (м#[sup 2])
				.filter-group__wrapper
					.filter-group__values
						.filter-group__value #[span от] {{filter.area.min}}
						.filter-group__value #[span до] {{filter.area.max}}
					.filter-group__slider-wrap
						.filter-group__slider(ref="sliderArea")
			.filter-group
				.filter-group__caption Этаж
				.filter-group__wrapper
					.filter-group__values
						.filter-group__value #[span от] {{filter.floor.min}}
						.filter-group__value #[span до] {{filter.floor.max}}
					.filter-group__slider-wrap
						.filter-group__slider(ref="sliderFloor")
			.filter-group.filter-group--apply
				UiButton(class-names="btn-green" text="применить" @button-click="closeFilter")
			.filter-group.filter-group--options
				.filter-options
					.filter-group__option.filter-option(v-for="item, index in checkBoxes")
						input(type="checkbox" name="additional" :id="item.key" v-bind:value="item" v-model="option")
						label(:for="item.key")
							| {{item.title}}
							button(type="button").filter-option__delete-btn
			.filter-group.filter-group--last
				.filter-group__buttons
					button(type="button" @click="resetFilter").filter-group__reset-btn Сбросить фильтры
					button(type="button" @click="resetFilter").filter-group__reset-btn.filter-group__reset-btn--mobile Сбросить 
</template>

<script setup>
import { useFilterStore } from "~/stores/filter-actions";
import { useMenuStore } from "~/stores/menu";
import noUiSlider from "nouislider";

const store = useFilterStore();
const storeMenu = useMenuStore();

const closeFilter = () => {
   if (storeMenu.isOpenMenu === false) {
      body_lock_remove(1000);
   }
   store.closeFitler();
};

const checkBoxes = reactive([
   {
      id: 0,
      title: "Дизайнерская отделка",
      key: "design",
   },
   {
      id: 1,
      title: "Видовая квартира",
      key: "room",
   },
   {
      id: 2,
      title: "Выгодное предложение",
      key: "offer",
   },
]);

const option = ref([]);

const sliderPrice = ref("");
const sliderArea = ref("");
const sliderFloor = ref("");

const filter = reactive({
   price: {
      min: 3,
      max: 42.2,
      minRange: 3,
      maxRange: 42.2,
      step: 0.1,
   },
   area: {
      min: 17,
      max: 120,
      minRange: 17,
      maxRange: 120,
      step: 0.1,
   },
   floor: {
      min: 1,
      max: 20,
      minRange: 1,
      maxRange: 20,
      step: 1,
   },
});

const initRange = (element, { ...obj }) => {
   noUiSlider.create(element, {
      start: [obj.min, obj.max],
      step: obj.step,
      connect: true,
      range: {
         min: obj.min,
         max: obj.max,
      },
   });
};

const updateSliderPrice = (element, obj) => {
   element.noUiSlider.on("update", (e, values, handle) => {
      let min = e[0];
      let max = e[1];
      if (!isNaN(min) && !isNaN(max)) {
         obj.min = new Intl.NumberFormat("ru-RU").format(min);
         obj.max = new Intl.NumberFormat("ru-RU").format(max);
      }
   });
};

const updateSliderArea = (element, obj) => {
   element.noUiSlider.on("update", (e, values, handle) => {
      let min = Math.round(e[0]);
      let max = Math.round(e[1]);
      if (!isNaN(min) && !isNaN(max)) {
         obj.min = min;
         obj.max = max;
      }
   });
};

const updateSliderFloor = (element, obj) => {
   element.noUiSlider.on("update", (e, values, handle) => {
      let min = Math.round(e[0]);
      let max = Math.round(e[1]);
      if (!isNaN(min) && !isNaN(max)) {
         obj.min = new Intl.NumberFormat("ru-RU").format(min);
         obj.max = new Intl.NumberFormat("ru-RU").format(max);
      }
   });
};

const updateRangeSliders = () => {
   updateSliderPrice(sliderPrice.value, filter.price);
   updateSliderArea(sliderArea.value, filter.area);
   updateSliderFloor(sliderFloor.value, filter.floor);
};

const initRangeSliders = () => {
   initRange(sliderPrice.value, filter.price);
   initRange(sliderArea.value, filter.area);
   initRange(sliderFloor.value, filter.floor);
};

const resetRangeSlider = (slider, obj) => {
   slider.noUiSlider.set([obj.minRange, obj.maxRange]);
};

const resetRangeSliders = () => {
   resetRangeSlider(sliderPrice.value, filter.price);
   resetRangeSlider(sliderArea.value, filter.area);
   resetRangeSlider(sliderFloor.value, filter.floor);
};

const resetFilter = () => {
   option.value = [];
   resetRangeSliders();
};

onMounted(() => {
   initRangeSliders();
   updateRangeSliders();
});
</script>

<style lang="scss">
@import "nouislider/dist/nouislider.min.css";
.flats-filter {
   border-radius: 10px;
   padding: 36px;
   background: var(--bg-white);
   @media screen and (max-width: $md) {
      position: fixed;
      right: 110%;
      top: 0;
      width: 100%;
      height: 100dvh;
      background: var(--text-white);
      z-index: 40;
      padding: 15px 15px 42px;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      gap: 36px;
      transition: right 0.8s ease-in-out 0s;
      pointer-events: none;
      border-radius: 0;
      &.active {
         right: 0;
         pointer-events: all;
      }
   }
   .page--flats-scheme & {
      padding: 33px 36px;
      @media screen and (max-width: $md) {
         padding: 15px 15px 42px;
      }
   }
   &__top {
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      display: none;
      @media screen and (max-width: $md) {
         display: flex;
      }
   }
   &__close {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      &::before {
         content: "";
         display: block;
         width: 24px;
         height: 24px;
         mask-image: url("/images/icons/arrow-back.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--main-color);
      }
   }
   &__title {
      font-size: 13px;
      line-height: 18px;
      color: var(--text-midnight-100);
   }
   &__body {
      display: grid;
      grid-template-columns: repeat(3, 1fr) 162px;
      align-items: end;
      gap: 36px 24px;
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 20px;
      }
      @media screen and (max-width: $md) {
         display: flex;
         flex-direction: column;
         height: 100%;
      }
   }
}
.filter-group {
   display: grid;
   gap: 6px;
   font-size: 14px;
   line-height: 18px;
   @media screen and (max-width: $md) {
      width: 100%;
      font-size: 13px;
   }
   &--options {
      grid-column: span 2;
      @media screen and (max-width: $xl) {
         grid-column: initial;
      }
      @media screen and (max-width: $md) {
         margin-top: 12px;
      }
   }
   &--last {
      display: grid;
      grid-column: span 2;
      justify-items: end;
      align-self: center;
      @media screen and (max-width: $xl) {
         grid-column: initial;
         order: 2;
         justify-content: center;
      }
      @media screen and (max-width: $md) {
         margin-top: 4px;
      }
   }
   &--apply {
      @media screen and (max-width: $xl) {
         order: 1;
      }
      @media screen and (max-width: $md) {
         margin-top: auto;
      }
   }
   &__caption {
      font-size: 14px;
      line-height: 18px;
      color: var(--text-gray);
      @media screen and (max-width: $md) {
         font-size: 13px;
      }
   }
   &__wrapper {
      padding: 15px 16px;
      border: 1px solid var(--bg-gray);
      border-radius: 5px;
      min-height: 52px;
      position: relative;
      @media screen and (max-width: $md) {
         min-height: 37px;
         padding: 8px 16px;
      }
   }
   &__values {
      display: flex;
      justify-content: space-between;
      gap: 10px;
   }
   &__value {
      display: flex;
      align-items: center;
      gap: 4px;
      & span {
         color: var(--text-gray);
      }
   }
   &__slider-wrap {
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      top: 16px;
      @media screen and (max-width: $md) {
         top: 9px;
      }
   }
   &__option {
      position: relative;
   }
   &__buttons {
      & .btn {
         display: none;
      }
   }
   &__reset-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--text-gray);
      font-size: 16px;
      line-height: 19px;
      &::after {
         background-color: currentColor;
         @extend .filter-option__delete-btn;
         mask-size: 12px 12px;
         background: var(--text-gray);
      }
      @media screen and (max-width: $md) {
         & span {
            display: none;
         }
         font-weight: 400;
         font-size: 14px;
         line-height: 20px;
      }
      @media screen and (max-width: $md) {
         display: none;
      }
      &--mobile {
         display: none;
         @media screen and (max-width: $md) {
            display: flex;
         }
      }
   }
}
.filter-options {
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 8px;
}
.filter-option {
   &__delete-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      display: none;
      pointer-events: none;
      &::after {
         content: "";
         width: 12px;
         height: 12px;
         display: block;
         mask-image: url("/images/icons/close-gray.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--text-gray);
      }
   }
   & input {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
      &:checked ~ label {
         background-color: var(--bg-white-dirt);
         border-color: transparent;
      }
      &:checked ~ label {
         & .filter-option__delete-btn {
            display: block;
         }
      }
   }
   & label {
      padding: 7px 15px;
      border: 1px solid var(--bg-gray);
      border-radius: 100px;
      min-height: 38px;
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: border-color $time, background-color $time;
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            border-color: var(--text-gray);
         }
      }
      &::before {
         content: "";
         display: block;
         width: 18px;
         height: 18px;
         mask-repeat: no-repeat;
         mask-position: center;
         background-color: var(--main-color);
      }
      @media screen and (max-width: $md) {
         min-height: 34px;
      }
   }
   &:nth-child(1) {
      & label {
         &::before {
            mask-image: url("/images/icons/option-design.svg");
         }
      }
   }
   &:nth-child(2) {
      & label {
         &::before {
            mask-image: url("/images/icons/option-room.svg");
         }
      }
   }
   &:nth-child(3) {
      & label {
         &::before {
            mask-image: url("/images/icons/option-offer.svg");
         }
      }
   }
}
.noUi-target {
   height: 1px;
   // background: var(--bg-gray);
   background: transparent;
   border: none;
   border-radius: 0;
   z-index: 10;
   width: 98%;
   box-shadow: none;
   cursor: pointer;
   &::before,
   &::after {
      content: none;
      height: 1px;
      width: 4px;
      top: 0;
      position: absolute;
      background-color: var(--bg-gray);
      display: block;
   }
   &::before {
      right: -4px;
   }
   &::after {
      left: -4px;
   }
}
.noUi-horizontal .noUi-handle {
   height: 7px;
   width: 7px;
   background-color: var(--main-color);
   border-radius: 50%;
   box-shadow: none;
   border: none;
   right: -4px;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   justify-content: center;
   place-items: center;
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
      }
   }
   &::before,
   &::after {
      content: none;
   }
   &::before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
   }
}
.noUi-connect {
   background: var(--main-color);
}
</style>
