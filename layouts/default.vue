<template lang="pug">
	.wrapper
		AppHeader
		.page
			slot
		AppFooter
</template>

<script setup></script>

<style lang="scss">
.page {
  padding: 84px 0 200px;
}
</style>
