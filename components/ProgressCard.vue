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
   overflow: hidden;
   &::after {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 200px;
      background: linear-gradient(
         to top,
         rgba(43, 47, 59, 0.5),
         rgba(43, 47, 59, 0)
      );
      transition: opacity 0.8s;
   }
   &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      // left: -1px;
      // top: -1px;
      // width: calc(100% + 2px);
      // height: calc(100% + 2px);
      background: rgba(43, 47, 59, 0.5);
      transition-timing-function: cubic-bezier(0.25, 0.74, 0.22, 0.99);
      transition-property: clip-path;
      clip-path: circle(0 at 50% 50%);
      transition-duration: 0.8s;
      pointer-events: none;
      z-index: 1;
   }
   @media (any-hover: hover) {
      &:hover {
         cursor: pointer;
         &::before {
            clip-path: circle(70.71068% at 50% 50%);
         }
         &::after {
            // height: 100%;
            opacity: 0;
         }
      }
   }
   &__image {
      padding-bottom: math.div(480, 390) * 100%;
      @media screen and (max-width: $xxxl) {
         padding-bottom: math.div(428, 348) * 100%;
      }
      @media screen and (max-width: $xl) {
         padding-bottom: math.div(314, 256) * 100%;
      }
      @media screen and (max-width: $md) {
         padding-bottom: math.div(290, 253) * 100%;
      }
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
      @media screen and (max-width: $md) {
         padding: 20px;
      }
   }
   &__caption {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      color: var(--text-white);
      font-family: var(--second-family);
      flex: 1 1 auto;
      @media screen and (max-width: $xl) {
         font-size: 22px;
         line-height: 26px;
      }
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 22px;
      }
   }
}
</style>
