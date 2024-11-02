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
   transition: opacity 0.5s ease 0.4s, visibility 0.5s ease 0s;
   &.open-popup {
      & .popup__content {
         transform: translate(0%, 0%);
         transition: transform 0.5s ease 0.4s;
         opacity: 1;
      }
   }
   & .popup {
      &__wrapper {
         height: 100%;
         padding: 0;
      }
      &__content {
         max-width: 100%;
         height: 100%;
         padding: 94px 120px;
         border-radius: 0;
         background: var(--text-white);
         opacity: 1;
         transform: translate(100%, 0%);
         transition: transform 0.5s ease 0s;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: 100%;
      gap: 36px;
      // padding-right: 120px;
      overflow-y: auto;
      overflow-x: hidden;
      max-height: 100%;
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb {
         width: 0px;
         height: 0px;
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
