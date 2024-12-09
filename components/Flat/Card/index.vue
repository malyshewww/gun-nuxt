<template lang="pug">
	.flat-card
		.flat-card__body
			FlatCardImageSlider(:images="flat.images")
			.flat-card__main
				.flat-card__area Апартаменты {{flat.area}} м#[sup 2]
				.flat-card__price {{formatNumber(flat.price)}}
				.flat-card__features.features-card
					ul.features-card__list
						li.features-card__item(v-for="(feature, idx) in flat.features" :key="idx") {{feature}}
			.flat-card__parameters.parameters-card(v-if="flat.parameters")
				.parameters-card__item {{flat.parameters[0]}}
				.parameters-card__wrapper(@click="toggleDropdown(flatIndex)" :class="{active: activeCard === flatIndex}")
					.parameters-card__button(v-if="parametersLength") 
						| +{{parametersLength}}
						span.parameters-card__button-icon
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
   flatIndex: {
      required: true,
   },
   activeCard: {
      type: Number,
      required: true,
      default: () => -1,
   },
});

const open = ref(false);

const emit = defineEmits(["toggleDropdown"]);

const toggleDropdown = (idx) => {
   emit("toggleDropdown", idx);
};

const parametersLength = computed(() => {
   return props.flat.parameters.length - 1;
});
const newParametersList = computed(() => {
   return props.flat.parameters.filter((item, index) => index !== 0);
});

onMounted(() => {
   // function deactivateAllParams() {
   //    const activeDropdownButtons = document.querySelectorAll(
   //       ".parameters-card__wrapper.active"
   //    );
   //    [...activeDropdownButtons].forEach((elem) => {
   //       elem.classList.remove("active");
   //    });
   // }
   // function handleParamsClicks(event) {
   //    const target = event.target;
   //    if (target.matches(".parameters-card__wrapper")) {
   //       if (target.classList.contains("active")) {
   //          target.classList.remove("active");
   //       } else {
   //          target.classList.add("active");
   //       }
   //    } else {
   //       deactivateAllParams();
   //    }
   // }
   // document.addEventListener("click", handleParamsClicks, false);
});
</script>

<style lang="scss" scoped>
.flat-card {
   padding: 24px;
   background-color: var(--bg-white);
   transition: box-shadow $time;
   border-radius: 10px;
   @media (any-hover: hover) {
      &:hover {
         box-shadow: 0 0 15px 0 rgba(43, 47, 59, 0.1);
      }
   }
   @media screen and (max-width: $md) {
      padding: 16px;
   }
   &__body {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: start;
      gap: 25px;
      @media screen and (max-width: $md) {
         gap: 16px;
      }
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
      @media screen and (max-width: $md) {
         font-size: 20px;
         line-height: 24px;
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
      @media screen and (max-width: $md) {
         gap: 8px;
      }
   }
   &__item {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      gap: 12px;
      @media screen and (max-width: $md) {
         gap: 8px;
      }
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
   margin-top: auto;
   &__wrapper {
      position: relative;
      @media (any-hover: hover) {
         &:hover {
            cursor: pointer;
            & .parameters-card__tooltip {
               top: 0;
               opacity: 1;
               pointer-events: all;
            }
         }
      }
      @media screen and (max-width: $xl) {
         &.active {
            & .parameters-card__tooltip {
               top: 0;
               opacity: 1;
               pointer-events: all;
            }
            & .parameters-card__button {
               background-color: var(--text-midnight-100);
               &-icon {
                  opacity: 1;
                  pointer-events: all;
               }
            }
         }
      }
   }
   &__button {
      @extend .parameters-card__item;
      transition: background-color $time;
      display: grid;
      place-items: center;
      position: relative;
      pointer-events: none;
   }
   &__button-icon {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      opacity: 0;
      transition: opacity $time;
      pointer-events: none;
      &::before {
         content: "";
         display: block;
         width: 14px;
         height: 14px;
         background-color: var(--text-white);
         mask-image: url("/images/icons/close.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         mask-size: 14px 14px;
         pointer-events: none;
      }
   }
   &__tooltip {
      position: absolute;
      left: 50%;
      top: 20px;
      transform: translate(-50%, calc(-100% - 12px));
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
      isolation: isolate;
      &::before {
         content: "";
         position: absolute;
         width: 0;
         height: 0;
         top: 100%;
         left: calc(50%);
         // transform: translateX(-50%);
         box-sizing: border-box;
         border: 5px solid var(--main-color);
         border-color: transparent transparent #fff #fff;
         transform-origin: 0 0;
         transform: translate(-50%, 0) rotate(-45deg);
         box-shadow: -3px 3px 3px 0 rgba(43, 47, 59, 0.1);
         @media screen and (max-width: $md) {
            left: auto;
            right: 20px;
            transform: translate(0, 0) rotate(-45deg);
         }
      }
      @media screen and (max-width: $md) {
         left: auto;
         right: 0;
         transform: translate(0%, calc(-100% - 16px));
      }
      & .parameters-card__item {
         min-height: 28px;
         justify-items: center;
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
      @media screen and (max-width: $md) {
         padding: 4px 16px;
         min-height: 30px;
      }
   }
}
</style>
