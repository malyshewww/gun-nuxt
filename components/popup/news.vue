<template lang="pug">
	Teleport(to="body")
		Popup(class="popup-news" :is-open="isOpen" @close-popup="closePopup")
			.popup-news__body
				.popup-news__heading
					.popup-news__title {{popupData.title}}
					.popup-news__date {{popupData.date}}
				.popup-news__content
					.content(v-if="popupData.text") {{popupData.text}}
					.popup-news__bottom
						UiButton(class-names="btn-white" text="закрыть" @buttonClick="closePopup")
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
});

const emit = defineEmits(["closePopup", "buttonClick"]);
// eslint-disable-next-line
const closePopup = () => {
   emit("closePopup");
};
const buttonClick = () => {
   emit("buttonClick");
};
</script>

<style lang="scss">
.popup-news {
   & .popup__wrapper {
      height: 100%;
   }
   & .popup__content {
      max-width: 1373px;
      height: 100%;
      padding: 94px 120px;
      padding-right: 0;
      border-radius: 0;
      background: var(--text-white);
   }
   &__body {
      display: grid;
      grid-template-columns: 100%;
      gap: 36px;
      padding-right: 120px;
      max-height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb {
         width: 1px;
         height: 0;
         background: transparent;
         display: none;
      }
   }
   &__content {
      display: grid;
      grid-template-columns: 100%;
      justify-items: start;
      gap: 64px;
      font-family: var(--font-family);
   }
   &__heading {
      display: grid;
      justify-items: start;
      gap: 18px;
   }
   &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: uppercase;
   }
   &__date {
      border: 1px solid var(--bg-gray);
      font-family: var(--font-family);
      border-radius: 100px;
      padding: 5px 19px;
      min-height: 32px;
      font-size: 14px;
      line-height: 18px;
      display: grid;
      place-items: center;
      color: var(--text-gray);
   }
   &__bottom {
   }
}
</style>
