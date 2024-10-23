<template lang="pug">
	header.header(:class="{'header-white': isWhite}")
		.header__body
			AppHeaderLogo
			AppHeaderMenu
			AppHeaderActions
</template>

<script setup>
const props = defineProps({
   isWhite: {
      type: Boolean,
      required: false,
      default: () => "",
   },
});
provide("isWhiteLogo", props.isWhite);
</script>
<style lang="scss">
.header {
   min-height: 80px;
   background-color: transparent;
   padding: 21px 56px;
   position: sticky;
   top: 0;
   width: 100%;
   z-index: 20;
   .page--home & {
      position: fixed;
   }
   &:not(.header-white) {
      background-color: var(--text-white);
   }
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
   }
   &.header-white {
      // position: absolute;
      // top: 0;
      // left: 0;
      // width: 100%;
      isolation: isolate;
      color: var(--text-white);
      z-index: 10;
      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: calc(100% + 20px);
         background: linear-gradient(
            180deg,
            #2b2f3b 0%,
            rgba(43, 47, 59, 0) 100%
         );
         opacity: 0.5;
         z-index: -1;
      }
   }
   &.header-black {
      color: var(--main-color);
      background-color: var(--text-white);
   }
}
</style>
