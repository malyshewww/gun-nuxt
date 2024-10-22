<template lang="pug">
	header.header
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
   &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
   }
}
</style>
