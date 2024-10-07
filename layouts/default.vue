<template lang="pug">
	.wrapper
		AppHeader(:menu="menu")
		.page
			slot
		AppFooter(:menu="menu")
</template>

<style lang="scss">
.page {
   padding: 84px 0 200px;
}
</style>

<script setup>
const menu = [
   {
      title: "О проекте",
      path: "#",
   },
   {
      title: "Апартаменты в продаже",
      path: "#",
   },
   {
      title: "Динамика строительства",
      path: "#",
   },
   {
      title: "Новости и акции",
      path: "#",
   },
   {
      title: "Паркинг",
      path: "#",
   },
   {
      title: "Ипотека",
      path: "#",
   },
   {
      title: "Контакты",
      path: "#",
   },
];
</script>
