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
   }
   &__item {
      &:not(:last-child) {
         padding-right: 12px;
         border-right: 1px solid var(--border-white);
      }
   }
}
</style>
