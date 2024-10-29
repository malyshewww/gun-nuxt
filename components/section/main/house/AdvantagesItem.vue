<template lang="pug">
	.house-advantage
		.house-advantage__icon
		.house-advantage__title {{item.title}}
		.house-advantage__text(v-html="item.text")
</template>

<script setup>
defineProps({
   item: {
      type: Object,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.house-advantage {
   display: grid;
   grid-template-columns: 48px 1fr;
   align-items: start;
   justify-items: start;
   gap: 9px 24px;
   &__icon {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      grid-row: span 2;
      &::before {
         content: "";
         display: block;
         width: 48px;
         height: 48px;
         mask-repeat: no-repeat;
         mask-position: center;
         mask-size: 40px 40px;
         background-color: var(--main-color);
      }
   }
   &__title {
      grid-column: 2 / -1;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      text-transform: uppercase;
      color: var(--text-midnight-100);
   }
   &__text {
      grid-column: 2 / -1;
      font-weight: 600;
      line-height: 22px;
      color: var(--text-gray);
      font-family: var(--font-family);
   }
   @for $i from 1 through 3 {
      &:nth-child(#{$i}) .house-advantage__icon {
         &::before {
            mask-image: url("/images/icons/house-advantage-#{$i}.svg");
         }
      }
   }
}
</style>
