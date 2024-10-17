<template lang="pug">
	header.header
		.header__body
			AppHeaderLogo
			AppHeaderMenu
			AppHeaderActions
</template>

<script setup></script>
<style lang="scss">
.header {
  min-height: 80px;
  background-color: transparent;
  padding: 20px 40px;
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
</style>
