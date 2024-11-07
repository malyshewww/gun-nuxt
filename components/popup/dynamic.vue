<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-dynamic" :is-open="isOpen" @close-popup="closePopup")
			PopupDynamicTpl(v-if="isOpen" :popup-data="popupData")
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
   },
   initialSlide: {
      type: Number,
      required: true,
   },
});
const emit = defineEmits(["closePopup"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
   // destroyDynamicSlider();
};
</script>

<style lang="scss">
.popup-dynamic {
   & .popup__content {
      width: 100%;
      max-width: 1238px;
      min-height: auto;
      border-radius: 0;
      padding: 64px;
      background: var(--text-white);
      @media screen and (max-width: $md) {
         padding: 0;
         background: transparent;
      }
   }
   & .popup__close {
      top: 20px;
      right: 20px;
      @media screen and (max-width: $md) {
         height: 33px;
         top: 0px;
         right: 8px;
         &::before {
            background-color: var(--bg-white);
         }
      }
   }
}
</style>
