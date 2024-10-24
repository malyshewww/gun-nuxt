<template lang="pug">
	.wrapper
		UiTrailer
		AppHeader(:is-white="false")
		.page
			slot
		//- AppFooter
</template>

<script setup></script>

<style lang="scss">
.page {
   padding: 84px 0 280px;
   @media screen and (max-width: $xl) {
      padding: 64px 0 160px;
   }
   @media screen and (max-width: $md) {
      padding: 32px 0 100px;
   }
}
.page--flats-list .page {
   padding-bottom: 285px;
}
.page--flats-scheme .page {
   padding-bottom: 270px;
}
.page--apartment .page {
   padding-bottom: 290px;
   @media screen and (max-width: $xl) {
      padding-bottom: 160px;
   }
   @media screen and (max-width: $md) {
      padding-bottom: 100px;
   }
}
</style>
