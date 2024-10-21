<template lang="pug">
	section.main-progress
		.container
			.main-progress__wrapper
				.section-top
					.section-top__content
						h2.section-top__title.custom-title
							| Динамика 
							span.text-transparent-current
								| строительства
								nuxt-link(to="dynamic").section-top__link
				SectionMainProgressSlider
</template>

<script setup></script>

<style lang="scss" scoped>
.main-progress {
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 80px;
   }
}
.section-top .text-transparent-current {
   display: inline-flex;
   gap: 30px;
   align-items: center;
}
.section-top {
   margin-left: 214px;
   max-width: 1036px;
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
