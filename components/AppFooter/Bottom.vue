<template lang="pug">
	.footer__bottom
		.footer__text © 2024. Застройщик: ООО «Каскад Инвест специализированный застройщик», проектная декларация и иная документация, предусмотренная законодательством РФ, размещена на сайте ЕИСЖС: наш.дом.рф. Информация размещённая на сайте носит исключительно информационный характер и не является публичной офертой. Привлечение денежных средств осуществляется на основании договоров об участии в долевом строительстве с размещением денежных средств на счетах эскроу.
		nuxt-link(to="/page/politic").footer__link Политика обработки персональных данных
</template>

<style lang="scss" scoped>
.footer {
   &__bottom {
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: var(--text-gray);
      display: grid;
      justify-items: center;
      gap: 11px;
   }
   &__text {
   }
   &__link {
      border-bottom: 1px solid currentColor;
   }
}
</style>
