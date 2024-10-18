<template lang="pug">
   SectionMainHero
   .main-content
      AppHeader
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
