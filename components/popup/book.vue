<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-book" :is-open="isOpen" @close-popup="closePopup")
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
.popup-book {
   color: var(--text-white);
   & .popup {
      &__content {
         padding: 0;
         max-width: 600px;
      }
      &__body {
         display: block;
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
