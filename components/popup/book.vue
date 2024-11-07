<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-book" :is-open="isOpen" @close-popup="closePopup")
			PopupTpl(:popup-data="popupData" :form-errors="formErrors" @remove-error-name="removeErrorName" @remove-error-phone="removeErrorPhone")
</template>

<script setup>
import { usePopupBookStore } from "~/stores/popup/book";

const store = usePopupBookStore();

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

const formErrors = reactive({
   name: true,
   phone: false,
});

const removeErrorName = () => {
   formErrors.name = false;
   // store.removeErrorName();
};

const removeErrorPhone = () => {
   formErrors.phone = false;
   // store.removeErrorPhone();
};

const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
</script>

<style lang="scss">
.popup-book {
   color: var(--text-white);
   @media screen and (max-width: $xl) {
      transition: opacity 0.3s ease 0.2s, visibility 0.5s ease-out 0s;
   }
   &.open-popup {
      & .popup {
         &__content {
            @media screen and (max-width: $xl) {
               transform: translate(0%, 0%);
               transition: transform 0.5s ease 0.2s;
               opacity: 1;
            }
         }
      }
   }
   & .popup {
      &__wrapper {
         @media screen and (max-width: $xl) {
            height: 100%;
            padding: 0;
         }
      }
      &__content {
         padding: 0;
         max-width: 600px;
         @media screen and (max-width: $xl) {
            max-width: 100%;
            padding: 0;
            height: 100vh;
            border-radius: 0;
            opacity: 1;
            transform: translate(100%, 0%);
            transition: transform 0.5s ease 0s;
         }
      }
      &__body {
         display: block;
         @media screen and (max-width: $xl) {
            display: flex;
            height: 100%;
         }
      }
      &__image {
         display: none;
      }
      &__close {
         @media (any-hover: hover) {
            &:hover {
               &::before {
                  background-color: currentColor;
               }
            }
         }
      }
   }
}
</style>
