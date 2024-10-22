<template lang="pug">
	section.house-format
		.container
			.house-format__wrapper
				.section-top
					SectionHeading(title="Формат жилья")
					.section-top__content
						h2.section-top__title.custom-title
							| Умные студии #[span.text-transparent-current с отделкой под ключ]
						.section-top__description 
							| Площадь от&nbsp;17&nbsp;до&nbsp;25&nbsp;м², что делает студию доступной почти для каждого. Планировка детально продумана конструкторами и дизайнерами. Каждый метр жилья имеет чёткое назначение
				.house-format__body
					SectionMainHouseAdvantages
					SectionMainHouseSlider
</template>

<script setup></script>

<style lang="scss" scoped>
.house-format {
   padding: 110px 0;
   overflow: hidden;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 100px;
   }
   &__body {
      display: flex;
      align-items: flex-end;
      gap: 130px;
   }
}
.section-top {
   justify-items: center;
   text-align: center;
   &__title {
      justify-content: center;
   }
   &__content {
      justify-items: center;
   }
   &__description {
      max-width: 810px;
   }
}
</style>
