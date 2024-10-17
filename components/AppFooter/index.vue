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
							AppFooterSubscribeForm
							AppFooterInfo
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
</style>
