<template lang="pug">
	.contacts-footer__schedule.schedule-footer
		ul.schedule-footer__list
			li.schedule-footer__item ПН-ЧТ: 9:00–19:00
			li.schedule-footer__item ПТ: 9:00–18:00
			li.schedule-footer__item СБ: 10:00–16:00
			li.schedule-footer__item ВС: Выходной
</template>

<style lang="scss" scoped>
.schedule-footer {
   &__list {
      @include reset-list;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      @media screen and (max-width: $xl) {
         gap: 8px 0px;
      }
   }
   &__item {
      &:not(:last-child) {
         padding-right: 12px;
         border-right: 1px solid var(--border-white);
         @media screen and (max-width: $md) {
            padding-right: 8px;
         }
      }
      @media screen and (max-width: $xl) {
         &:not(:last-child) {
            margin-right: 12px;
         }
         @media screen and (max-width: $md) {
            margin-right: 8px;
         }
      }
      @media screen and (max-width: $xl) {
         font-size: 14px;
         line-height: 20px;
      }
   }
}
</style>
