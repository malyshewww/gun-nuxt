<template lang="pug">
	UiButton(text="узнать больше о проекте" class-names="btn-green" @button-click="openPopupProject")
	PopupProject(:is-open="store.isOpenPopup" @closePopup="closePopupProject" :popup-data="popupData.project")
</template>

<script setup>
import { usePopupProjectStore } from "~/stores/popup/project";

const store = usePopupProjectStore();

const openPopupProject = () => {
   store.openPopup();
};
const closePopupProject = () => {
   store.closePopup();
};

const popupData = reactive({
   project: {
      title: "Узнайте больше о проекте",
      subTitle:
         "Оставьте свои контактные данные — и наш менеджер свяжется с вами",
      isImageProject: true,
   },
});
</script>

<style lang="scss" scoped>
.main-footer {
   &__column {
      & .btn {
         display: none;
         @media screen and (max-width: $xl) {
            display: block;
            max-width: 261px;
         }
         @media screen and (max-width: $md) {
            max-width: 100%;
         }
      }
      @media screen and (max-width: $md) {
         gap: 48px;
      }
   }
}
</style>
