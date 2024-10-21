<template lang="pug">
	.wrapper
		main.main
		.page
			slot
		AppFooter
</template>

<script setup></script>

<style lang="scss" scoped>
.page {
   padding: 0px 0px 320px;
}
</style>
