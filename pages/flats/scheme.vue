<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.flats.flats-scheme
			.container
				FlatHeading
				FlatFilter
				.flats-scheme__wrapper
					FlatSchemeLegend
					.flats-scheme__body(ref="scheme")
						FlatScheme(:corpus="corpus" @openTooltip="openTooltip" @closeTooltip="closeTooltip")
						.flats-scheme__tooltip.tooltip-scheme(ref="tooltip" :class="{active: data.tooltip.isActive}")
							.tooltip-scheme__body
								.tooltip-scheme__image
									img(:src="data.tooltip.img" alt="изображение")
								.tooltip-scheme__content
									ul.tooltip-scheme__parameters
										li.tooltip-scheme__parameter #[span Апартаменты {{data.tooltip.square}}]
										li.tooltip-scheme__parameter {{data.tooltip.number}}
									.tooltip-scheme__price {{data.tooltip.price}}
									.tooltip-scheme__status {{data.tooltip.status}}
</template>
<script setup>
import json from "~/static/data.json";

useHead({
   bodyAttrs: {
      class: "page--flats-scheme",
   },
});

const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Апартаменты в продаже",
      path: "/",
   },
];

const corpus = reactive({
   floorsNumber: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
   floors: {
      floorNumber: "1",
      floorFlats: json,
   },
});

const data = reactive({
   tooltip: {
      isActive: false,
      img: "",
      price: "",
      number: "",
      square: "",
      status: "",
   },
});

const tooltip = ref("");

const scheme = ref("");

const openTooltip = (event, room) => {
   console.log("open tooltip");
   data.tooltip.number = `${room.number}`;
   data.tooltip.img = room.plan;
   data.tooltip.square = `${room.square} м²`;
   data.tooltip.number = `№ ${room.number}`;
   data.tooltip.price = `${formatNumber(room.price)}`;
   data.tooltip.status =
      room.status === "in-sell" ? "в продаже" : "забронирована";
   if (window.innerWidth > 1024) {
      tooltip.value.style.left = `${
         event.target.getBoundingClientRect().left -
         scheme.value.getBoundingClientRect().left +
         15
      }px`;
      tooltip.value.style.top = `${
         event.target.getBoundingClientRect().top -
         scheme.value.getBoundingClientRect().top
      }px`;
   }
   data.tooltip.isActive = !data.tooltip.isActive;
};

const closeTooltip = () => {
   console.log("close tooltip");
   data.tooltip.isActive = !data.tooltip.isActive;
};
</script>

<style lang="scss" scoped>
.flats-scheme {
   &__wrapper {
      margin-top: 40px;
      border-radius: 10px;
      padding: 36px;
      padding-right: 10px;
      background: var(--bg-white);
      display: grid;
      gap: 38px;
   }
   &__body {
      display: grid;
      gap: 14px;
      position: relative;
   }
}
.tooltip-scheme {
   position: absolute;
   top: 0;
   left: 100px;
   min-width: 300px;
   max-width: 310px;
   //   width: fit-content;
   transition: all $time;
   opacity: 0;
   z-index: 5;
   transform: translate(-50%, calc(-100% - 10px));
   pointer-events: none;
   @media (max-width: $xl) {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transform: initial;
      pointer-events: none;
      visibility: hidden;
      &.active {
         pointer-events: initial;
         visibility: visible;
      }
   }
   &.active {
      opacity: 1;
   }
   &__body {
      padding: 14px 20px;
      display: grid;
      grid-template-columns: 60px 1fr;
      gap: 14px;
      align-items: center;
      border-radius: 2px;
      padding: 14px 20px;
      min-height: 98px;
      box-shadow: 0 0 5px 0 rgba(43, 47, 59, 0.1);
      background: var(--bg-white);
      position: relative;
      &::before {
         content: "";
         position: absolute;
         width: 0;
         height: 0;
         top: calc(100% + 2px);
         left: 50%;
         // transform: translateX(-50%);
         box-sizing: border-box;
         border: 5px solid black;
         border-color: transparent transparent #fff #fff;
         transform-origin: 0 0;
         transform: rotate(-45deg);
         box-shadow: -5px 5px 5px 0 rgba(43, 47, 59, 0.1);
      }
   }
   &__content {
      display: grid;
      gap: 4px;
   }
   &__parameters {
      display: flex;
      align-items: center;
      gap: 6px;
   }
   &__price {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      text-transform: uppercase;
   }
   &__status {
      font-size: 14px;
      line-height: 18px;
      color: var(--text-gray);
   }
   &__parameters {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
   }
   &__parameter {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      gap: 6px;
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
</style>
