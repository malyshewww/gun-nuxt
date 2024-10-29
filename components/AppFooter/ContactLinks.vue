<template lang="pug">
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
      @media screen and (max-width: $xl) {
         font-size: 18px;
         line-height: 20px;
      }
   }
}
.contacts-footer {
   &__links {
      display: grid;
      gap: 12px;
      justify-items: start;
      @media screen and (max-width: $xl) {
         & .email-link {
            font-size: 14px;
            line-height: 18px;
         }
      }
   }
}
</style>
