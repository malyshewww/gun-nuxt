<template lang="pug">
    .main-footer__info.info-footer
        nuxt-link(to="/").info-footer__link #[span Информация о проекте и проектная документация]
        .info-footer__company.company-footer
            .company-footer__label Создание сайта
            a(href="#").company-footer__logo
                img(:src="`/images/company-logo.svg`" alt="логотип компании")
</template>

<style lang="scss" scoped>
.info-footer {
   margin-top: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 24px 10px;
   padding: 18px 0;
   font-size: 14px;
   line-height: 18px;
   min-height: 60px;
   color: var(--text-gray);
   &__link span {
      border-bottom: 1px solid currentColor;
   }
   @media screen and (max-width: $xxxl) {
      margin-top: 20px;
   }
   @media screen and (max-width: $xl) {
      min-height: auto;
      padding: 0;
      margin: 0;
      font-size: 13px;
      line-height: 20px;
   }
}
.company-footer {
   display: flex;
   align-items: center;
   gap: 8px;
   &__label {
   }
   &__logo {
      flex-shrink: 0;
      width: 75px;
      display: flex;
      align-items: center;
   }
}
</style>
