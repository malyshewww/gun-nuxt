<template lang="pug">
	.flats-filter
		.flats-filter__top
			button(type="button").flats-filter__close
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
				UiButton(class-names="btn-green" text="применить")
			.filter-group.filter-group--options
				.filter-options
					.filter-group__option.filter-option
						input(type="checkbox" name="additional" id="design")
						label(for="design") 
							| Дизайнерская отделка
							button(type="button").filter-option__delete-btn
					.filter-group__option.filter-option
						input(type="checkbox" name="additional" id="room")
						label(for="room") 
							| Видовая квартира
							button(type="button").filter-option__delete-btn
					.filter-group__option.filter-option
						input(type="checkbox" name="additional" id="offer")
						label(for="offer") 
							| Выгодное предложение
							button(type="button").filter-option__delete-btn
			.filter-group.filter-group--last
				.filter-group__buttons
					UiButton(class-names="btn-green" text="применить")
					button(type="button").filter-group__reset-btn Сбросить фильтры
</template>

<script setup>
import noUiSlider from "nouislider";

const sliderPrice = ref("");
const sliderArea = ref("");
const sliderFloor = ref("");

const filter = reactive({
   price: {
      min: 3,
      max: 42.2,
      minRange: null,
      maxRange: null,
      step: 0.1,
   },
   area: {
      min: 17,
      max: 120,
      minRange: null,
      maxRange: null,
      step: 0.1,
   },
   floor: {
      min: 1,
      max: 20,
      minRange: null,
      maxRange: null,
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
   .page--flats-scheme & {
      padding: 33px 36px;
   }
   &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      display: none;
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
   }
}
.filter-group {
   display: grid;
   gap: 6px;
   font-size: 14px;
   line-height: 18px;
   &--options {
      grid-column: span 2;
   }
   &--last {
      display: grid;
      grid-column: span 2;
      justify-items: end;
      align-self: center;
   }
   &__caption {
      font-size: 14px;
      line-height: 18px;
      color: var(--text-gray);
   }
   &__wrapper {
      padding: 15px 16px;
      border: 1px solid var(--bg-gray);
      border-radius: 5px;
      min-height: 52px;
      position: relative;
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
      padding: 9px 15px;
      border: 1px solid var(--bg-gray);
      border-radius: 100px;
      min-height: 38px;
      background: var(--bg-white);
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
