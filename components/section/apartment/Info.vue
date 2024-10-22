<template lang="pug">
	.apartment-card.apartment-card__info.info-apartment
		.info-apartment__header
			.info-apartment__title Апартаменты {{info.area}} м²
			.info-apartment__date Срок сдачи III кв. 2027 года
		.info-apartment__characteristics.characteristics
			ul.characteristics__list
				li.characteristics__item(v-if="info.floor")
					.characteristics__label 
						span Этаж
					.characteristics__value {{info.floor}} из 20
				li.characteristics__item(v-if="info.rooms")
					.characteristics__label
						span Количество комнат
					.characteristics__value {{info.rooms}}
				li.characteristics__item(v-if="info.number")
					.characteristics__label 
						span Номер апартаментов
					.characteristics__value {{info.number}}
			ul.features-list
				.features-item(v-for="item in info.features") {{item.title}}
		.info-apartment__bottom
			.info-apartment__prices(v-if="info.price")
				.info-apartment__price {{formatNumber(info.price)}}
				.info-apartment__price-label {{info.priceArea}}
			.info-apartment__actions
				UiButton(text="забронировать" class-names="btn-green")
				UiButton(text="консультация" class-names="btn-white")
</template>

<script setup>
defineProps({
   info: {
      type: Object,
      required: true,
   },
});
</script>
<style lang="scss">
.apartment-card {
   &__info {
      display: grid;
      align-items: start;
      gap: 40px;
      border-radius: 10px;
      padding: 32px;
      background: var(--bg-white);
   }
}
.info-apartment {
   position: sticky;
   top: 20px;
   &__header {
      display: grid;
      gap: 8px;
   }
   &__title {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-transform: uppercase;
      font-family: var(--second-family);
   }
   &__date {
      font-size: 16px;
      line-height: 19px;
      color: var(--text-gray);
   }
   &__characteristics {
      display: grid;
      gap: 32px;
   }
   &__bottom {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      margin-top: 9px;
   }
   &__prices {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 14px;
   }
   &__price {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      font-family: var(--second-family);
   }
   &__price-label {
      font-size: 16px;
      line-height: 19px;
      color: var(--text-gray);
   }
   &__actions {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
   }
}
.characteristics {
   &__list {
      @include reset-list;
      display: grid;
      gap: 13px;
   }
   &__item {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
   }
   &__label {
      font-size: 16px;
      line-height: 19px;
      color: var(--text-gray);
      position: relative;
      flex: 1 1 auto;
      & span {
         background-color: var(--bg-white);
         padding-right: 6px;
         line-height: 19px;
         display: inline-block;
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
      padding-left: 6px;
   }
}
.features-list {
   @include reset-list;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 14px;
}
.features-item {
   border: 1px solid var(--bg-gray);
   border-radius: 100px;
   padding: 10px 24px;
   min-height: 44px;
   background: var(--bg-white);
   font-size: 14px;
   line-height: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   color: var(--text-midnight-100);
   &::before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      display: grid;
      place-items: center;
      background-repeat: no-repeat;
      background-position: center;
   }
   @for $i from 1 through 3 {
      &:nth-child(#{$i})::before {
         background-image: url("/images/icons/feature-#{$i}.svg");
      }
   }
}
</style>
