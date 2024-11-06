<template lang="pug">
	.contacts__info.info-contacts
		.info-contacts__header
			h3.info-contacts__title Офис продаж
			a(href="tel:+78312662195").info-contacts__phone +7 831 266-21-95
			.info-contacts__place
				address.info-contacts__address г. Нижний Новгород,ул. Ковалихинская, 8 Б (ориентир Центр Международной торговли)
				UiEmailLink(email="kaskad2601500@yandex.ru")
			.info-contacts__social
				UiSocial(color="gray")
		.info-contacts__schedule.schedule-contacts
			h5.schedule-contacts__title Время работы
			ul.schedule-contacts__list
				li.schedule-contacts__item(v-for="item, index in schedule" :key="index")
					.schedule-contacts__label 
						span {{item.label}}
					.schedule-contacts__value {{item.value}}
		SectionContactsActions
</template>

<script setup>
defineProps({
   schedule: {
      type: Array,
      required: true,
   },
});
</script>

<style lang="scss" scoped>
.info-contacts {
   background-color: var(--bg-white);
   border-radius: 10px;
   padding: 40px;
   display: grid;
   gap: 54px;
   margin-top: 6px;
   // min-height: 678px;
   @media screen and (max-width: $xl) {
      margin-top: 0;
      padding: 20px;
      gap: 46px;
   }
   &__header {
      display: grid;
      justify-items: start;
      gap: 24px;
   }
   &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      margin: 0;
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 120%;
      }
   }
   &__phone {
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      font-family: var(--second-family);
      text-transform: uppercase;
      transition: color $time ease 0s;
      @media (any-hover: hover) {
         &:hover {
            color: var(--text-avocado);
         }
      }
      @media screen and (max-width: $md) {
         font-size: 18px;
         line-height: 120%;
      }
   }
   &__place {
      display: grid;
      gap: 18px;
      font-size: 16px;
      line-height: 19px;
   }
   &__address {
   }
   &__email {
   }
   & .email-link {
      justify-self: start;
   }
   // &__social {
   //    & .social {
   //       &__link {
   //          width: 48px;
   //          height: 48px;
   //       }
   //    }
   // }
}
.schedule-contacts {
   display: grid;
   gap: 24px;
   max-width: 350px;
   @media screen and (max-width: $xl) {
      max-width: 100%;
   }
   &__title {
      margin: 0;
      @media screen and (max-width: $xl) {
         font-size: 18px;
         line-height: 120%;
      }
   }
   &__list {
      display: grid;
      gap: 14px;
   }
   &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   &__label {
      font-weight: 600;
      position: relative;
      z-index: 2;
      flex: 1 1 auto;
      & span {
         padding-right: 14px;
         background-color: var(--bg-white);
      }
      &::before {
         content: "";
         display: block;
         left: 0;
         bottom: 2px;
         position: absolute;
         width: 100%;
         border-bottom: 1px dashed var(--bg-gray);
         z-index: -1;
      }
   }
   &__value {
      line-height: 19px;
      padding-left: 14px;
   }
}
.social {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      gap: 32px;
   }
   &__link {
      width: 46px;
      height: 46px;
      flex-shrink: 0;
      border-radius: 50%;
      border: 1px solid var(--bg-gray);
      display: grid;
      place-items: center;
      transition: border-color $time ease 0s;
      @media (any-hover: hover) {
         &:hover {
            border-color: var(--text-gray);
         }
      }
   }
}
</style>
