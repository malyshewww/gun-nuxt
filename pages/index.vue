<template lang="pug">
	SectionMainHero
	.main-content
		//- AppHeader(:is-white="false")
		SectionMainAbout
		SectionMainLocation
		SectionMainAdvantages
		SectionMainHouse
		SectionMainScenariors
		SectionMainNews
		SectionMainProgress
</template>

<script setup>
definePageMeta({
   layout: "main",
});
useHead({
   bodyAttrs: {
      class: "page--home",
   },
});
</script>

<style lang="scss" scoped>
.main-content {
   margin-top: 100vh;
   position: relative;
   z-index: 10;
   background-color: var(--text-white);
   & section {
      padding: 110px 0;
      @media screen and (max-width: $xxxl) {
         padding: 100px 0;
      }
      &.main-about {
         padding-top: 120px;
      }
      &.main-progress {
         padding-top: 100px;
         padding-bottom: 0;
      }
   }
}
</style>
