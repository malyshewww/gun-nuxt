<template lang="pug">
	.dynamic__item.item-dynamic(@click="openPopupDynamic($event, card)")
		.item-dynamic__image.ibg
			img(:src="`/images/dynamic/dynamic-${card.images[0]}@2x.jpg`" :alt="`Динамика строительства ${card.caption}`")
		.item-dynamic__content
			.item-dynamic__caption {{ card.caption }}
</template>

<script setup>
defineProps({
   card: {
      //   type: Object,
      required: true,
      default: () => {},
   },
});

const emit = defineEmits(["openPopupDynamic"]);

const openPopupDynamic = () => {
   emit("openPopupDynamic");
};
</script>

<style lang="scss" scoped>
.item-dynamic {
   position: relative;
   flex-shrink: 0;
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
      }
   }
   &__image {
      padding-bottom: math.div(480, 390) * 100%;
   }
   &__content {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      z-index: 2;
      padding: 31px 36px;
   }
   &__caption {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      color: var(--text-white);
      font-family: var(--second-family);
      flex: 1 1 auto;
   }
}
</style>
