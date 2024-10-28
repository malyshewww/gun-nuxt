<template lang="pug">
	.flats-scheme__legend(:class="{'is-scolled': isScrollScheme}")
		ul.flats-scheme__legend-list
			li.flats-scheme__legend-item.booked #[span №]— забронирована
			li.flats-scheme__legend-item.on-sale #[span №]— в продаже
			li.flats-scheme__legend-item.sold #[span №]— продана
</template>

<script setup>
defineProps({
   isScrollScheme: {
      type: Boolean,
      required: false,
   },
});
</script>

<style lang="scss" scoped>
.flats-scheme {
   &__legend {
      user-select: none;
      margin-left: 45px;
      @media screen and (max-width: $xl) {
         margin-left: 0;
      }
   }
   &__legend-list {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px 24px;
      @media screen and (max-width: $md) {
         flex-direction: column;
         align-items: flex-start;
      }
   }
   &__legend-item {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      gap: 4px;
      & span {
         border-radius: 5px;
         padding: 10px;
         width: 40px;
         height: 40px;
         background: var(--bg-gray);
         flex-shrink: 0;
         display: grid;
         place-items: center;
         font-weight: 400;
         font-size: 12px;
         color: var(--text-gray);
         @media screen and (max-width: $md) {
            width: 30px;
            height: 30px;
            padding: 5px;
         }
      }
      &:nth-child(2) {
         & span {
            color: var(--text-white);
            background-color: var(--text-avocado);
         }
      }
      &:nth-child(3) {
         & span {
            box-shadow: 0 0 5px 0 rgba(43, 47, 59, 0.1);
            background: var(--bg-white);
         }
      }
   }
}
</style>
