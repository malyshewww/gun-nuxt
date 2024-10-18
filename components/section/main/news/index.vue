<template lang="pug">
	section.main-news
		.container
			.main-news__wrapper
				.section-top
					.section-top__content
						h2.section-top__title.custom-title
							| Новости #[span.text-transparent-current и&nbsp;акции]
				SectionMainNewsSlider
</template>

<style lang="scss" scoped>
.main-news {
   padding: 110px 0px;
   overflow: hidden;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 90px;
   }
}
.section-top {
   margin-left: 214px;
   max-width: 687px;
   &__content {
      width: 100%;
   }
   &__title {
      & span {
         margin-left: auto;
      }
   }
}
</style>
