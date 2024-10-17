<template lang="pug">
	.wrapper
		AppHeader
		.page
			slot
		AppFooter
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
.page {
  padding: 84px 0 200px;
}
</style>
