<template lang="pug">
	.info-contacts__actions
		UiButton(text="заказать звонок" class-names="btn-green" @button-click="openPopupCall")
		PopupCall(:is-open="store.isOpenPopup" @close-popup="closePopupCall" :popup-data="popupData.call")
		PopupNotice(:is-open="storeNotice.isOpenPopupNotice" @close-popup="closePopupNotice" :popup-data="popupData.callNotice")
</template>

<script setup>
import { usePopupCallStore } from "~/stores/popup/call";
import { usePopupNoticeConsultationStore } from "~/stores/popup/noticeConsultation";

const store = usePopupCallStore();
const storeNotice = usePopupNoticeConsultationStore();

const openPopupCall = () => {
   store.openPopup();
};
const closePopupCall = () => {
   store.closePopup();
};

const closePopupNotice = () => {
   storeNotice.closePopup();
};

const popupData = reactive({
   call: {
      title: "заказать звонок",
      subTitle:
         "Заполните форму, наш менеджер перезвонит и проконсультирует вас по всем вопросам",
      isImage: true,
   },
   callNotice: {
      subTitle: "В ближайшее время с вами свяжется менеджер для консультации",
   },
});
</script>

<style lang="scss" scoped>
.info-contacts {
   &__actions {
      height: 52px;
      align-self: stretch;
   }
}
</style>
