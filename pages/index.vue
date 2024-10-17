<template lang="pug">
   SectionMainHero
   .main-content
      AppHeader
      SectionMainAbout
      SectionMainLocation
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
