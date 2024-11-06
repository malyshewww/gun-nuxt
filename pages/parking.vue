<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.parking
			.container
				.main__heading.heading-main
					h1.heading-main__title Парковки
				//- button(type="button" @click="goTo") go to news
</template>

<script setup>
const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Парковки",
      path: "/",
   },
];
</script>

<style lang="scss" scoped></style>
