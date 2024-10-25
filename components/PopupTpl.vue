<template lang="pug">
	.popup__body
		.popup__image.ibg(v-if="popupData.isImage")
			img(:src="`/images/popup/popup-img.jpg`")
		form.popup__form.form-popup
			.form-popup__title {{popupData.title}}
			.form-popup__sub-title(v-html="popupData.subTitle")
			.form-popup__items
				FormField(type="text" placeholder="Имя" name="name")
				FormField(type="text" placeholder="Телефон" name="name")
			.form-popup__text Отправляя заявку, вы подтверждаете, что ознакомлены и согласны с условиями #[nuxt-link(to="/page/politic").form-popup__link политики обработки персональных данных]
			UiButton(text="отправить" class-names="btn-green" type="submit")
</template>

<script setup>
const props = defineProps({
   popupData: {
      type: Object,
      required: true,
      default: () => {},
   },
});
</script>
<style lang="scss" scoped>
.popup {
   &__image {
      padding-bottom: math.div(500, 300) * 100%;
      flex: 0 0 300px;
   }
   &__body {
      display: grid;
      grid-template-columns: 300px 1fr;
   }
}
.form-popup {
   padding: 52px 60px 60px;
   display: grid;
   gap: 28px;
   justify-items: start;
   box-shadow: 0 10px 40px 0 rgba(29, 29, 27, 0.1);
   background: var(--text-midnight-100);
   color: var(--text-white);
   font-family: var(--font-family);
   flex: 1 1 auto;
   &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      font-family: var(--second-family);
   }
   &__sub-title {
      font-size: 16px;
      line-height: 19px;
   }
   &__items {
      display: grid;
      grid-template-columns: 100%;
      gap: 20px;
      width: 100%;
   }
   &__text {
      font-size: 14px;
      line-height: 18px;
      color: var(--text-gray);
   }
   &__link {
      color: currentColor;
      border-bottom: 1px solid var(--border-white);
      font-size: inherit;
      line-height: inherit;
   }
   & .btn {
      width: auto;
   }
}
</style>
