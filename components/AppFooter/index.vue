<template lang="pug">
	footer.footer
		.container
			.footer__wrapper
				.footer__logo-top
					picture
						source(:srcset="`/images/footer-logo-top.svg`" media="(min-width: 767.98px)")
						source(:srcset="`/images/footer-logo-top-mobile.svg`" media="(min-width: 300px)")
						img(:src="`/images/footer-logo-top.svg`" alt="логотип")
				.footer__body
					.footer__main.main-footer
						.main-footer__column.main-footer__column--1
							.main-footer__label Офис продаж
							AppFooterContacts
							AppFooterSocial
							.main-footer__mobile
								AppFooterContactLinks
								AppFooterSocial
						.main-footer__column.main-footer__column--2
							.main-footer__label Узнайте больше о проекте
							AppFooterSubscribeForm
							UiButton(text="узнать больше о проекте" class-names="btn-green")
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
      top: -79px;
      @media screen and (max-width: $md) {
         height: 38px;
         top: -37px;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: 100%;
      align-items: start;
      gap: 32px;
      padding: 80px 0;
      @media screen and (max-width: $xxxl) {
         padding: 64px 0;
         gap: 28px;
      }
      @media screen and (max-width: $xl) {
         gap: 32px;
         padding: 64px 0 64px;
      }
      @media screen and (max-width: $md) {
         padding: 48px 0 64px;
      }
   }
   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: start;
      gap: 32px;
      margin-bottom: 48px;
      @media screen and (max-width: $xxxl) {
         grid-template-columns: 100%;
         gap: 64px;
         margin-bottom: 36px;
      }
      @media screen and (max-width: $xl) {
         gap: 32px;
         margin-bottom: 32px;
      }
      @media screen and (max-width: $md) {
         margin-bottom: 16px;
      }
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
         @media screen and (max-width: $xl) {
            display: grid;
            grid-template-columns: 1fr 215px;
            grid-template-areas:
               "label contacts"
               "address contacts";
            gap: 28px 64px;
            width: 100%;
            max-width: 100%;
         }
         @media screen and (max-width: $md) {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            grid-template-areas:
               "label label"
               "address address"
               "contacts contacts";
         }
      }
      &--2 {
         max-width: 820px;
         justify-self: end;
         @media screen and (max-width: $xxxl) {
            max-width: 100%;
            justify-self: start;
            width: 100%;
         }
         @media screen and (max-width: $xl) {
            gap: 32px;
            & .main-footer__label {
               display: none;
            }
         }
         & .btn {
            display: none;
            @media screen and (max-width: $xl) {
               display: block;
               max-width: 261px;
            }
            @media screen and (max-width: $md) {
               max-width: 100%;
            }
         }
         @media screen and (max-width: $md) {
            gap: 48px;
         }
      }
   }
   &__label {
      font-family: var(--second-family);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      @media screen and (max-width: $xl) {
         grid-area: label;
         font-size: 22px;
         line-height: 26px;
      }
   }
   &__contacts {
      grid-area: address;
   }
   &__mobile {
      display: none;
      @media screen and (max-width: $xl) {
         display: block;
         grid-area: contacts;
         & .contacts-footer {
            &__social {
               margin-top: 28px;
               display: block;
            }
         }
      }
      @media screen and (max-width: $md) {
         margin-top: 12px;
         & .contacts-footer {
            &__social {
               margin-top: 20px;
            }
         }
      }
   }
}
</style>
