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
   overflow: clip;
   @media screen and (max-width: $xl) {
      margin-top: 0;
   }
   & section {
      padding: 110px 0;
      @media screen and (max-width: $xxxl) {
         padding: 100px 0;
      }
      @media screen and (max-width: $xl) {
         padding: 60px 0;
      }
      @media screen and (max-width: $md) {
         padding: 40px 0;
      }
      &.main-about {
         padding-top: 120px;
         @media screen and (max-width: $xl) {
            padding-top: calc(80px + 61px);
         }
         @media screen and (max-width: $md) {
            padding-top: calc(64px + 48px);
         }
      }
      &.main-progress {
         padding-top: 100px;
         padding-bottom: 0;
         @media screen and (max-width: $xl) {
            padding-top: 60px;
            padding-bottom: 0;
         }
         @media screen and (max-width: $md) {
            padding-top: 40px;
         }
      }
      &.house-format {
         @media screen and (max-width: $xl) {
            padding-top: 67px;
         }
      }
   }
}
</style>
