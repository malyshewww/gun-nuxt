<template lang="pug">
	.contacts__info.info-contacts
		.info-contacts__header
			h3.info-contacts__title Офис продаж
			a(href="tel:+78312662195").info-contacts__phone +7 831 266-21-95
			.info-contacts__place
				address.info-contacts__address г. Нижний Новгород,ул. Ковалихинская, 8 Б (ориентир Центр Международной торговли)
				a(href="mailto:kaskad2601500@yandex.ru").info-contacts__email kaskad2601500@yandex.ru
			.info-contacts__social.social
				ul.social__list
					li.social__item
						a(href="" tagret="_blank").social__link
							svg(width="28", height="28", viewBox="0 0 28 28", fill="none", xmlns="http://www.w3.org/2000/svg")
								path(d="M14.8938 19.8334C8.45705 19.8334 4.80954 15.494 4.6665 8.16675H7.88489C7.95641 13.5021 10.3881 15.7785 12.2476 16.2054V8.16675H15.2514V12.7907C17.1109 12.5773 19.042 10.5143 19.6857 8.16675H22.6895C22.1889 11.0123 20.0433 13.1464 18.5413 14.0001C20.0433 14.7115 22.4749 16.5611 23.3332 19.8334H19.9717C19.2565 17.6281 17.4685 15.9208 15.1084 15.6363V19.8334H14.8938Z", fill="#878C9A")
		.info-contacts__schedule.schedule-contacts
			h5.schedule-contacts__title Время работы
			ul.schedule-contacts__list
				li.schedule-contacts__item(v-for="item, index in schedule" :key="index")
					.schedule-contacts__label {{item.label}}
					.schedule-contacts__value {{item.value}}
		.info-contacts__actions
			button(type="button").btn заказать звонок
</template>

<script setup>
defineProps({
   schedule: {
      type: Array,
      required: true,
   },
});
</script>

<style lang="scss">
.info-contacts {
   background-color: var(--bg-white);
   border-radius: 10px;
   padding: 40px;
   display: grid;
   gap: 54px;
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
   }
   &__phone {
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      text-transform: uppercase;
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
   &__actions {
      height: 52px;
   }
}
.schedule-contacts {
   display: grid;
   gap: 24px;
   &__title {
      margin: 0;
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
   &__labeL {
      font-weight: 600;
      line-height: 22px;
   }
   &__value {
      line-height: 19px;
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
