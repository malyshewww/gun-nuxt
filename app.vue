<template lang="pug">
	NuxtLayout
		NuxtErrorBoundary
			NuxtPage
</template>

<script setup>
const menu = [
  {
    title: "О проекте",
    path: "/",
  },
  {
    title: "Апартаменты в продаже",
    path: "/",
  },
  {
    title: "Динамика строительства",
    path: "/",
  },
  {
    title: "Новости и акции",
    path: "/",
  },
  {
    title: "Паркинг",
    path: "/",
  },
  {
    title: "Ипотека",
    path: "/",
  },
  {
    title: "Контакты",
    path: "/",
  },
];

provide("menu", menu);
</script>

<style lang="scss">
@import "~/assets/scss/nullstyle.scss";
@import "~/assets/scss/mixins.scss";
@import "~/assets/scss/fonts.scss";
@import "~/assets/scss/common.scss";
body.page--home {
  font-family: var(--second-family);
}
</style>
