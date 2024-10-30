<template lang="pug">
	section.main-location
		.container
			.main-location__wrapper
				SectionMainLocationHeader
				.main-location__body
					SectionMainLocationMap(:location-id="locationId")
					button(type="button").main-location__button развернуть карту
					SectionMainLocationSlider(@updateLocationId="updateLocationId")
</template>

<script setup>
const locationId = ref(1);

const updateLocationId = (id) => {
   locationId.value = id;
};

watch(
   () => locationId.value,
   (val) => {
      locationId.value = val;
   },
   { deep: true }
);
</script>

<style lang="scss">
.main-location {
   padding: 110px 0;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 80px 0;
      @media screen and (max-width: $xl) {
         gap: 53px 0;
      }
   }
   &__body {
      position: relative;
      padding: 0 0 60px;
      &::before {
         content: "";
         display: block;
         position: absolute;
         top: 0;
         left: 0;
         width: 70.36%;
         height: 61px;
         z-index: 2;
         background-color: var(--text-white);
         pointer-events: none;
         @media screen and (max-width: $xxxl) {
            width: 62.85%;
         }
         @media screen and (max-width: $xl) {
            content: none;
         }
      }
      @media screen and (max-width: $xxxl) {
         padding: 0 0 134px;
      }
      @media screen and (max-width: $xl) {
         padding: 0;
      }
      @media screen and (max-width: $md) {
         margin: 0 -15px;
      }
   }
   &__button {
      position: absolute;
      z-index: 5;
      padding: 28px;
      width: 216px;
      height: 220px;
      background: var(--text-avocado);
      left: 40px;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-transform: uppercase;
      color: var(--bg-white);
      &::after {
         content: "";
         display: block;
         width: 40px;
         height: 40px;
         flex-shrink: 0;
         mask-image: url("/images/icons/arrow-rotate.svg");
         mask-repeat: no-repeat;
         mask-position: center;
         mask-size: 40px 40px;
         background-color: currentColor;
         align-self: flex-end;
      }
      @media screen and (max-width: $xxxl) {
         left: 32px;
         font-weight: 700;
         font-size: 18px;
         line-height: 28px;
      }
      @media screen and (max-width: $xl) {
         display: none;
      }
   }
}
.btn-toggle {
   position: relative;
   z-index: 20;
}
</style>
