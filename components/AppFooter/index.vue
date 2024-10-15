<template lang="pug">
	footer.footer
		.container
			.footer__wrapper
				.footer__logo-top
					img(:src="`/images/footer-logo-top.svg`" alt="логотип")
				.footer__body
					.footer__main.main-footer
						.main-footer__column.main-footer__column--1
							.main-footer__label Офис продаж
							AppFooterContacts
							AppFooterSocial
						.main-footer__column
							.main-footer__label Узнайте больше о проекте
							.main-footer__form
								AppFooterSubscribeForm
							.main-footer__info.info-footer
								nuxt-link(to="/").info-footer__link Информация о проекте и проектная документация
								.info-footer__company.company-footer
									.company-footer__label Создание сайта
									a(href="#").company-footer__logo
										img(src="/images/company-logo.svg" alt="логотип компании")
					AppFooterMenu
					AppFooterBottom
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
   background-color: var(--text-midnight-100);
   color: var(--text-white);
   font-family: var(--font-family);
   &__wrapper {
      position: relative;
   }
   &__logo-top {
      height: 81px;
      position: absolute;
      top: -80px;
   }
   &__body {
      display: grid;
      grid-template-columns: 100%;
      align-items: start;
      gap: 32px;
      padding: 80px 0;
   }
   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 32px;
      margin-bottom: 48px;
   }
   &__phone {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
   }
   &__menu {
   }
}
.main-footer {
   &__column {
      display: flex;
      flex-direction: column;
      gap: 28px;
      &--1 {
         max-width: 605px;
         justify-self: start;
         height: 100%;
      }
      max-width: 820px;
      justify-self: end;
   }
   &__label {
      font-family: var(--second-family);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
   }
   &__contacts {
   }
   &__form {
   }
   &__info {
   }
}
.info-footer {
   margin-top: 32px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 10px;
   padding: 18px 0;
   font-size: 14px;
   line-height: 18px;
   min-height: 60px;
   color: var(--text-gray);
   &__link {
      border-bottom: 1px solid currentColor;
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
      width: 72px;
      display: flex;
      align-items: center;
   }
}
</style>
