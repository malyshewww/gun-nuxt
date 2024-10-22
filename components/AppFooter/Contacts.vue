<template lang="pug">
	.main-footer__contacts.contacts-footer
		.contacts-footer__items
			.contacts-footer__item
				address.contacts-footer__address г. Нижний Новгород, ул. Ковалихинская, 8Б (ориентир — Центр Международной торговли)
				AppFooterSchedule
			.contacts-footer__item
				.contacts-footer__links
					a(href="tel:+78312662195").footer__phone +7 831 266-21-95
					UiEmailLink(email="kaskad2601500@yandex.ru")
</template>

<style lang="scss" scoped>
.footer {
   &__phone {
      font-family: var(--second-family);
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      transition: color $time ease 0s;
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-avocado);
         }
      }
   }
}
.contacts-footer {
   display: grid;
   gap: 36px;
   &__items {
      display: grid;
      gap: 41px;
   }
   &__item {
      display: grid;
      gap: 24px;
   }
   &__address {
      line-height: 19px;
   }
   &__links {
      display: grid;
      gap: 12px;
      justify-items: start;
   }
}
</style>
