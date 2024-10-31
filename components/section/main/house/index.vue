<template lang="pug">
	section.house-format
		.container
			.house-format__wrapper
				.section-top
					SectionHeading(title="Формат жилья")
					.section-top__content
						h2.section-top__title.custom-title
							| Умные студии #[span.text-transparent-current с отделкой под&nbsp;ключ]
						.section-top__description 
							p Площадь от&nbsp;17&nbsp;до&nbsp;25&nbsp;м², что делает студию доступной почти для&nbsp;каждого. 
							p Планировка детально продумана конструкторами и дизайнерами. Каждый метр жилья имеет чёткое назначение
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
      gap: 100px 0;
      @media screen and (max-width: $xxxl) {
         gap: 80px 0;
      }
      @media screen and (max-width: $xl) {
         gap: 71px 0;
      }
      @media screen and (max-width: $md) {
         gap: 43px 0;
      }
   }
   &__body {
      display: flex;
      align-items: flex-end;
      gap: 130px;
      @media screen and (max-width: $xxxl) {
         gap: 40px;
      }
      @media screen and (max-width: $xl) {
         flex-direction: column;
         align-items: flex-start;
      }
      @media screen and (max-width: $md) {
         gap: 48px;
      }
   }
}
.section-top {
   justify-items: center;
   text-align: center;
   @media screen and (max-width: $md) {
      justify-items: start;
      text-align: left;
   }
   &__title {
      justify-content: center;
      @media screen and (max-width: $md) {
         justify-content: start;
         text-align: left;
      }
   }
   &__content {
      justify-items: center;
      @media screen and (max-width: $xl) {
         gap: 24px;
      }
      @media screen and (max-width: $md) {
         justify-items: start;
         gap: 20px;
      }
   }
   &__description {
      max-width: 810px;
      & p {
         display: inline-block;
         @media screen and (max-width: $md) {
            display: block;
         }
      }
   }
}
.text-transparent-current {
   // @media screen and (max-width: $md) {
   //    max-width: 275px;
   // }
}
</style>
