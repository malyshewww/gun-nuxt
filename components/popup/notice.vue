<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-notice" :is-open="isOpen" @close-popup="closePopup")
			.popup-notice__body
				.popup-notice__title Форма отправлена
				.popup-notice__sub-title(v-html="popupData.subTitle")
				UiButton(text="закрыть" class-names="btn-green" @buttonClick="closePopup")
</template>

<script setup>
const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
   popupData: {
      type: Object,
      required: false,
      default: () => {},
   },
});

const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
</script>

<style lang="scss">
.popup-notice {
   color: var(--text-white);
   & .popup {
      &__content {
         max-width: 590px;
         padding: 52px 60px 60px;
         box-shadow: 0 10px 40px 0 rgba(29, 29, 27, 0.1);
         background: var(--text-midnight-100);
         border-radius: 0;
      }
   }
   &__body {
      display: grid;
      justify-items: start;
      gap: 28px;
   }
   &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
      font-family: var(--second-family);
   }
   &__sub-title {
      font-weight: 600;
      line-height: 22px;
   }
   & .btn {
      width: auto;
   }
}
</style>
