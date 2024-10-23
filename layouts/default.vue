<template lang="pug">
	.wrapper
		UiTrailer
		AppHeader(:is-white="false")
		.page
			slot
		AppFooter
</template>

<script setup></script>

<style lang="scss">
.page {
   padding: 84px 0 280px;
}
.page--flats-list .page {
   padding-bottom: 285px;
}
.page--flats-scheme .page {
   padding-bottom: 270px;
}
.page--apartment .page {
   padding-bottom: 290px;
}
</style>
