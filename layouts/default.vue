<template lang="pug">
	.wrapper
		UiTrailer
		AppHeader(:is-white="false" :is-visible="isHeaderVisible")
		.page
			slot
		AppFooter
</template>

<script setup>
const isHeaderVisible = ref(true);

onMounted(() => {
   let scrollPosition = window.scrollY;
   window.addEventListener("scroll", () => {
      let currentScrollPosition = window.scrollY;
      if (scrollPosition <= currentScrollPosition) {
         isHeaderVisible.value = false;
      } else {
         isHeaderVisible.value = true;
      }
      scrollPosition = currentScrollPosition;
   });
});
</script>

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
// .page--flats-list .page {
//    padding-bottom: 281px;
// }
// .page--flats-scheme .page {
//    padding-bottom: 270px;
// }
// .page--apartment .page {
//    padding-bottom: 290px;
//    @media screen and (max-width: $xl) {
//       padding-bottom: 160px;
//    }
//    @media screen and (max-width: $md) {
//       padding-bottom: 100px;
//    }
// }
</style>
