<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.flats.flats-scheme
			.container
				FlatHeading
				FlatFilter
				.flats-scheme__wrapper
					FlatSchemeLegend
					.flats-scheme__body
						FlatScheme(:corpus="corpus" @openTooltip="openTooltip" @closeTooltip="closeTooltip")
						.flats-scheme__tooltip.tooltip-scheme
							.tooltip-scheme__body
								.tooltip-scheme__image
									img(:src="`/images/flat-card/flat-1.png`" alt="изображение")
								.tooltip-scheme__content
									ul.tooltip-scheme__parameters
										li.tooltip-scheme__parameter #[span Апартаменты 31,2 м²]
										li.tooltip-scheme__parameter № 12
									.tooltip-scheme__price 4500
									.tooltip-scheme__status В продаже
</template>
<script setup>
import json from "~/static/data.json";

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

const openTooltip = (event, room) => {
   console.log("open tooltip");
};

const closeTooltip = () => {
   console.log("close tooltip");
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
      gap: 48px;
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
   left: 0;
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
