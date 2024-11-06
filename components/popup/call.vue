<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-call" :is-open="isOpen" @close-popup="closePopup")
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
.popup-call {
   color: var(--text-white);
   & .popup {
      &__wrapper {
         @media screen and (max-width: $md) {
            height: 100%;
            padding: 0;
         }
      }
      &__content {
         padding: 0;
         max-width: 910px;
         @media screen and (max-width: $md) {
            max-width: 100%;
            padding: 0;
            height: 100vh;
            border-radius: 0;
         }
      }
      &__body {
         @media screen and (max-width: $md) {
            height: 100%;
         }
      }
      &__close {
         @media (any-hover: hover) {
            &:hover {
               &::before {
                  background-color: currentColor;
               }
            }
         }
         @media screen and (max-width: $md) {
            &::before {
               background-color: var(--bg-white);
            }
         }
      }
   }
}
</style>
