<template lang="pug">
	section.main-scenariors
		.container
			.main-scenariors__wrapper
				.section-top
					SectionHeading(title="Сценарии жизни")
					.section-top__content
						h2.section-top__title.custom-title
							| Правильные инвестиции
						.section-top__description 
							| Благодаря продуманному концепту проекта, в&nbsp;Пушке будет реализовано несколько сценариев жизни
				SectionMainScenariorsCards
</template>

<style lang="scss" scoped>
.main-scenariors {
   padding: 110px 0;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 80px;
   }
}
.section-top {
   justify-items: center;
   text-align: center;
   &__content {
      text-align: center;
      justify-items: center;
   }
}
</style>
