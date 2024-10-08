<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.contacts
			.container 
				.main__heading.heading-main
					h1.heading-main__title Контакты
				.contacts__body
					SectionContactsMap
					SectionContactsInfo(:schedule="schedule")
</template>

<script setup>
const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Контакты",
      path: "/contacts",
   },
];
const schedule = [
   {
      label: "ПН-ЧТ",
      value: "09:00–19:00",
   },
   {
      label: "ПТ",
      value: "09:00–18:00",
   },
   {
      label: "СБ",
      value: "10:00–16:00",
   },
   {
      label: "ВС",
      value: "Выходной",
   },
];
</script>

<style lang="scss">
.contacts {
   &__body {
      display: grid;
      grid-template-columns: 1fr 496px;
      gap: 40px;
      align-items: end;
   }
}
</style>
