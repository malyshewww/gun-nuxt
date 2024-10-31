<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-consultation popup-project" :is-open="isOpen" @close-popup="closePopup")
			PopupTpl(:popup-data="popupData")
</template>

<script setup>
const props = defineProps({
   isOpen: {
      type: Boolean,
      required: true,
   },
   popupData: {
      type: Object,
      required: true,
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
.popup-project {
   & .form-popup {
      padding: 52px 48px;
      @media screen and (max-width: $md) {
         padding: 20px;
         padding-top: 40px;
      }
   }
   & .popup__wrapper {
      height: 100%;
      padding: 0;
   }
   & .popup__content {
      max-width: 768px;
      height: 100vh;
      border-radius: 0;
   }
   & .popup__body {
      height: 100%;
   }
   & .popup__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   & .form-popup {
      gap: 20px;
      &__title {
         margin-bottom: 16px;
         @media screen and (max-width: $md) {
            margin: 0;
         }
      }
      &__items {
         margin-bottom: 12px;
         @media screen and (max-width: $md) {
            margin: 0;
         }
      }
      &__text {
         order: 1;
         margin-top: 12px;
         @media screen and (max-width: $md) {
            margin: 0;
         }
      }
      & .btn {
         width: 100%;
      }
   }
}
</style>
