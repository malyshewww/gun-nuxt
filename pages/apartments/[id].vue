<template lang="pug">
	div
		BreadCrumbs(:list="crumbs")
		main.main.apartment-card
			.container
				.apartment-card__wrapper
					.apartment-card__body
						SectionApartmentScheme
						SectionApartmentInfo(:info="apartmentData")
					SliderGallery(:slider="slider" slider-caption="Варианты дизайнерской отделки" :isDescr="true")
		PopupConsultation(:is-open="storePopupConsultation.isOpenPopupConsultation" @close-popup="closePopupConsultation" :popupData="popupData.consultation")
		PopupBook(:is-open="storePopupBook.isOpenPopupBook" @close-popup="closePopupBook" :popupData="popupData.book")
		PopupNotice(:is-open="storePopupNoticeBook.isOpenPopupNotice" @close-popup="closePopupNoticeBook" :popupData="popupData.noticeBook")
		PopupNotice(:is-open="storePopupNoticeConsultation.isOpenPopupNotice" @close-popup="closePopupNoticeConsultation" :popupData="popupData.noticeConsultation")
		//- PopupRequest(:is-open="storePopupRequest.isOpenPopupRequest" @close-popup="closePopuRequest" :popupData="popupData.request")
</template>

<script setup>
import { usePopupConsultationStore } from "~/stores/popup/consultation";
import { usePopupBookStore } from "~/stores/popup/book";
import { usePopupNoticeBookStore } from "~/stores/popup/noticeBook";
import { usePopupNoticeConsultationStore } from "~/stores/popup/noticeConsultation";
// import { usePopupRequestStore } from "~/stores/popup/request";

const storePopupConsultation = usePopupConsultationStore();
const storePopupBook = usePopupBookStore();
const storePopupNoticeBook = usePopupNoticeBookStore();
const storePopupNoticeConsultation = usePopupNoticeConsultationStore();
// const storePopupRequest = usePopupRequestStore();

const closePopupConsultation = () => {
   storePopupConsultation.closePopup();
};
const closePopupBook = () => {
   storePopupBook.closePopup();
};
const closePopupNoticeBook = () => {
   storePopupNoticeBook.closePopup();
};
const closePopupNoticeConsultation = () => {
   storePopupNoticeConsultation.closePopup();
};
// const closePopuRequest = () => {
//    storePopupRequest.closePopup();
// };

const popupData = reactive({
   consultation: {
      title: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
      subTitle:
         "Оставьте заявку, наш менеджер перезвонит и&nbsp;проконсультирует вас по всем вопросам",
      isImage: true,
   },
   book: {
      title: "ЗАБРОНИРОВАТЬ КВАРТИРУ",
      subTitle:
         "Оставьте заявку, наш менеджер перезвонит вам и поможет забронировать квартиру",
      isImage: false,
   },
   request: {
      title: "Оставить заявку",
      subTitle:
         "Оставьте заявку, наш менеджер перезвонит и&nbsp;проконсультирует вас по всем вопросам",
      isImage: true,
   },
   noticeConsultation: {
      subTitle:
         "В ближайшее время с вами свяжется менеджер для&nbsp;консультации",
   },
   noticeBook: {
      subTitle:
         "В ближайшее время с вами свяжется менеджер и поможет оформить бронь",
   },
});

useHead({
   bodyAttrs: {
      class: "page--apartment",
   },
});
const crumbs = [
   {
      title: "Главная",
      path: "/",
   },
   {
      title: "Апартаменты в продаже",
      path: "/",
   },
   {
      title: "Апартаменты 31,2 м²",
      path: "/",
   },
];
const slider = [
   {
      img: "1",
      alt: "описание",
   },
   {
      img: "2",
      alt: "описание",
   },
   {
      img: "3",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
   {
      img: "4",
      alt: "описание",
   },
];
const apartmentData = reactive({
   area: "31,2",
   floor: "17",
   rooms: "студия",
   number: "№ 12",
   price: "4500000",
   priceArea: "450 000 ₽/м²",
   features: [
      {
         title: "Дизайнерская отделка",
      },
      {
         title: "Видовая квартира",
      },
      {
         title: "Выгодное предложение",
      },
   ],
});
</script>

<style lang="scss" scoped>
.apartment-card {
   overflow: clip;
   &__wrapper {
      display: grid;
      grid-template-columns: 100%;
      gap: 156px;
      @media screen and (max-width: $xl) {
         gap: 80px;
      }
      @media screen and (max-width: $md) {
         gap: 40px;
      }
   }
   &__body {
      display: grid;
      grid-template-columns: 1fr 549px;
      gap: 96px;
      align-items: start;
      @media screen and (max-width: $xxxl) {
         gap: 40px;
         grid-template-columns: 1fr 400px;
      }
      @media screen and (max-width: $xl) {
         grid-template-columns: 100%;
         gap: 20px;
      }
   }
}
</style>
