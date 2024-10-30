<template lang="pug">
	.main-location__header.section-top
		SectionHeading(title="Локация")
		.section-top__content
			h2.section-top__title.custom-title
				| Всё #[span.text-transparent-current нужное] рядом
			.section-top__description Развитая в районе застройки транспортная система позволит комфортно и оперативно добраться в любую точку города
</template>

<style lang="scss" scoped>
.section-top {
   max-width: 1020px;
   &__description {
      max-width: 970px;
      @media screen and (max-width: $xxxl) {
         max-width: 680px;
      }
   }
   &__content {
      @media screen and (max-width: $xl) {
         gap: 16px;
      }
   }
}
</style>
